import React, { FormEvent, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAsync, useAuth } from "./context/auth";
import { useMediaQuery } from "react-responsive";
import { login } from "./service/auth";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });
  const { run } = useAsync();
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useReducer((s: any, a: any) => ({ ...s, ...a }), {
    documentNumber: "",
    phoneNumber: "",
    carNumber: "",
  });
  const options = [
    {
      label: "DNI",
      value: "DNI",
    },
    {
      label: "PASAPORTE",
      value: "PASAPORTE",
    },
  ];
  const handleInputChange = (e: { target: { value: string; name: any } }) => {
    setState({ [e.target.name]: e.target.value });
    if (
      state.documentNumber == "" ||
      state.phoneNumber == "" ||
      state.carNumber == ""
    ) {
      setError("Debes completar todos los campos");
    } else {
      setError("");
      setDisabled(false);
    }
  };
  type LocationProps = {
    state: {
      from: Location;
    };
  };
  let navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/protected";
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      state.documentNumber == "" ||
      state.phoneNumber == "" ||
      state.carNumber == ""
    ) {
      setError("Debes completar todos los campos");
    } else {
      setError("");
      setDisabled(false);
      await run(login(state));
      window.location.reload()
    }
  };

  return (
    <div className="home">
      <div className="home__background">
        <div className="home__background__content">
          <div className="home__background__content__logo">
            <img src="/img/logo.svg" />
          </div>
          <div className="sm:block flex">
            <div className="home__background__content__illustration">
              {isMobile ? (
                <img src="/img/illustration-home-mobile.svg" />
              ) : (
                <img src="/img/illustration-home.svg" />
              )}
            </div>
            <div className="home__background__content__text">
              <div className="home__background__content__highlight">
                <p>¡NUEVO!</p>
              </div>
              <div className="home__background__content__title">
                <span className="home__background__content__title-gray">
                  Seguro{" "}
                </span>
                <span className="home__background__content__title-red">
                  Vehicular Tracking
                </span>
              </div>
              <div className="home__background__content__paragraph mt-4">
                <p>Cuéntanos donde le harás seguimiento a tu seguro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__data">
        <div className="home__data__doubt">
          <span>¿Tienes alguna duda?</span>
          <span className="home__data__doubt__phone">
            <img src="/img/ic_phone.svg" />
            <span className="home__data__doubt__phone-acian">
              (01) 411 6001
            </span>
          </span>
        </div>
        <div className="home__data__form">
          <div className="home__data__form__title">
            <p>Déjanos tus datos</p>
          </div>
          <form onSubmit={handleSubmit} className="w-100 sm:w-96">
            <div className="flex mt-6">
              <div className="select">
                <button
                  aria-controls="select-list"
                  aria-haspopup={true}
                  className="select__label"
                >
                  <p>DNI</p>
                  <img src="./img/arrow_down.svg" />
                </button>
              </div>
              <input
                placeholder="Nro. de doc"
                name="documentNumber"
                onChange={handleInputChange}
                value={state.documentNumber}
                className="input"
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="Celular"
                name="phoneNumber"
                onChange={handleInputChange}
                value={state.phoneNumber}
                className="input"
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="Placa"
                name="carNumber"
                onChange={handleInputChange}
                value={state.carNumber}
                className="input"
              />
            </div>
            <div className="mt-6">
              <label className="home__data__form__terms">
                Acepto la <a>Política de Protección de Datos Personales</a> y
                los
                <a> Términos y Condiciones</a>.
                <input
                  type="checkbox"
                  id="terms__checkbox"
                  value="terms__checkbox"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <p>{error}</p>
            {disabled ? (
              <button className="home__data__form__button-disabled" disabled>
                COTÍZALO
              </button>
            ) : (
              <button className="home__data__form__button">COTÍZALO</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
