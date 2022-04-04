import React, { createContext, useCallback, useEffect } from "react";
import { client, login, getToken, logout } from "../service/auth";

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false);
  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);
  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch]
  );
}

const defaultInitialState = { status: "idle", data: null, error: null };

function useAsync(initialState) {
  const initialStateRef = React.useRef({
    ...defaultInitialState,
    ...initialState,
  });
  const [{ status, data, error }, setState] = React.useReducer(
    (s, a) => ({ ...s, ...a }),
    initialStateRef.current
  );

  const safeSetState = useSafeDispatch(setState);

  const setData = React.useCallback(
    (data) => safeSetState({ data, status: "resolved" }),
    [safeSetState]
  );
  const setError = React.useCallback(
    (error) => safeSetState({ error, status: "rejected" }),
    [safeSetState]
  );
  const reset = React.useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  );

  const run = React.useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error(`Argument passed must be a Promise`);
      }
      safeSetState({ status: "pending" });
      return promise.then(
        (data) => {
          setData(data);
          return data;
        },
        (error) => {
          setError(error);
          return Promise.reject(error);
        }
      );
    },
    [safeSetState, setData, setError]
  );

  return {
    isIdle: status === "idle",
    isLoading: status === "pending",
    isError: status === "rejected",
    isSuccess: status === "resolved",

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  };
}

async function bootstrapAppData() {
  let user = null;

  const token = await getToken();
  if (token) {
    const { data } = await client(`users/${token}`, "GET");
    user = data;
  }
  return user;
}

const AuthContext = createContext();

const LoginProvider = (props) => {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync();

  React.useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const login = React.useCallback(
    (form) => login(form).then((user) => setData(user)),
    [setData]
  );
  const logoutAuth = React.useCallback(() => {
    logout()
    setData(null);
  }, [setData]);

  const value = React.useMemo(
    () => ({ user, login, logoutAuth }),
    [login, logoutAuth, user]
  );
  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }
  throw new Error(`Unhandled status: ${status}`);
};

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { LoginProvider, useAsync, useAuth };
