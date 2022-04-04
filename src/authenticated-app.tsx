import { useNavigate } from "react-router-dom";
import { useAsync, useAuth } from "./context/auth";

const DashboardPage = () => {
  const {logoutAuth} = useAuth()
  return (
    <>
      <div className="nav">
        <img src="/img/logo.svg" />
        <div className="nav__contact">
          <span>¿Tienes alguna duda?</span>
          <span className="nav__contact__phone">
            <img src="/img/ic_phone.svg" />
            <span className="">(01) 411 6001</span>
          </span>
        </div>
      </div>
      <div className="dashboard">
        <div className="dashboard__nav">
          <ul>
            <li>Datos</li>
            <li>Arma tu plan</li>
          </ul>
        </div>
        <div className="dashboard__content">
          <div className="flex cursor-pointer" onClick={logoutAuth}>
            <img src="/img/icon_Back.svg"/>
            <p>Volver</p>
          </div>
          <div>
            <h2>
              ¡Hola, <span>Juan!</span>
            </h2>
            <p>Conoce las coberturas para tu plan</p>
          </div>
          <div className="dashboard__content__info">
            <div className="dashboard__content__card">
              <div className="flex absolute">
                <div className="dashboard__content__card__text">
                  <p>Placa: C2U-114</p>
                  <h3>Wolkswagen 2019 Golf</h3>
                </div>

                <img src="/img/card_man.svg" />
              </div>
            </div>
            <div className="dashboard__content__amount">
              <p>MONTO</p>
              <p>$35.00</p>
              <p>mensuales</p>
              <div></div>
              <p>El precio incluye</p>
              <div className="flex">
                <img src="/img/check.svg" /> <p>Llanta de respuesto</p>
              </div>
              <div className="flex">
                <img src="/img/check.svg" /> <p>Llanta de respuesto</p>
              </div>
              <div className="flex">
                <img src="/img/check.svg" /> <p>Llanta de respuesto</p>
              </div>
              <div className="dashboard__content__amount__button">
                LO QUIERO
              </div>
            </div>
            <div className="dashboard__content__extra">
              <div className="flex">
                <div>
                  <p>Indica la suma asegurada</p>
                  <p>
                    <span>MIN $12,500</span>
                    <span>MAX $16,500</span>
                  </p>
                </div>
                <div className="dashboard__content__extra__input">
                  <button></button>
                  <input
                    className="quantity bg-light"
                    min="0"
                    placeholder="0"
                    name="quantity"
                    value="1"
                    type="number"
                  />
                  <button className="plus"></button>
                </div>
                <div className="line"></div>
              </div>
              <div>
                <p>Agrega o quita coberturas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;