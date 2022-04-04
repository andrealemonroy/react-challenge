function handleUserResponse({ data }: any) {
  console.log(data);
  window.localStorage.setItem("token", data.id);
  return data;
}

async function getToken() {
  return window.localStorage.getItem("token");
}

function login(formData: any): Promise<any> {
  console.log("data", formData);
  return client("users", "POST", formData).then(handleUserResponse);
}

async function logout() {
  window.localStorage.removeItem("token");
}

const authURL = process.env.REACT_APP_ENDPOINT;

async function client(endpoint: string, type: string, data: any) {
  const config = {
    method: type,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return window
    .fetch(`${authURL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client, login, getToken, logout };
