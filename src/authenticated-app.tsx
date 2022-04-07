import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAsync, useAuth } from "./context/auth";

const DashboardPage = () => {
  const { logoutAuth, user } = useAuth();
  const [add, setAdd] = useState({
    first: true,
    second: false,
    third: false,
  });
  const [showMore, setShowMore] = useState({
    first: true,
    second: false,
    third: false,
  });
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
          <div className="dashboard__nav__content">
            <div className="dashboard__nav__content__step">
              <img src="img/step1.svg" />
              Datos
            </div>
            <div
              style={{
                border: "1px dashed #E4E8F7",
                // transform: "rotate(90deg)",
                width: 0,
                marginLeft: "10%",
              }}
            ></div>
            <div className="dashboard__nav__content__step">
              <img src="img/step2.svg" />
              Arma tu plan
            </div>
          </div>
        </div>
        <div className="dashboard__content">
          <div className="dashboard__content__back" onClick={logoutAuth}>
            <img src="/img/icon_Back.svg" />
            <p>Volver</p>
          </div>
          <div className="dashboard__content__welcome">
            <h2>
              ¡Hola, <span>Juan!</span>
            </h2>
            <p>Conoce las coberturas para tu plan</p>
          </div>
          <div className="dashboard__content__info">
            <div className="dashboard__content__card">
              <div className="flex absolute">
                <div className="dashboard__content__card__text">
                  <p>Placa: {user.carNumber}</p>
                  <h3>Wolkswagen 2019 Golf</h3>
                </div>

                <img src="/img/card_man.svg" />
              </div>
            </div>
            <div className="dashboard__content__amount">
              <p className="dashboard__content__amount-highlight">MONTO</p>
              <p className="dashboard__content__amount-number">$35.00</p>
              <p className="dashboard__content__amount-text">mensuales</p>
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
            <div>
              <div className="dashboard__content__extra">
                <div className="dashboard__content__extra__sum">
                  <p>Indica la suma asegurada</p>
                  <div className="flex">
                    <span>MIN $12,500 </span>
                    <span>I</span>
                    <span>MAX $16,500</span>
                  </div>
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
              </div>
              <div className="line"></div>
              <div className="dashboard__content__cover">
                <h3>Agrega o quita coberturas</h3>
                <div className="dashboard__content__cover-tab">
                  <input type="radio" id="tab1" name="tab" checked />
                  <label className="tab1" htmlFor="tab1">
                    Protege a tu auto
                  </label>
                  <input type="radio" id="tab2" name="tab" />
                  <label className="tab2" htmlFor="tab2">
                    Protege a los que te rodean
                  </label>
                  <input type="radio" id="tab3" name="tab" />
                  <label className="tab3" htmlFor="tab3">
                    mejora tu plan
                  </label>
                  <div className="tab-line"></div>
                  <div className="tab-container">
                    <div className="tab-container__content" id="c1">
                      <div>
                        <div className="flex">
                          <img className="mr-10" src="/img/icon-extra1.svg" />
                          <div className="mr-10 w-40">
                            <h3>Llanta robada</h3>
                          </div>
                          <div
                            className="cursor-pointer flex w-10"
                            onClick={() =>
                              setShowMore({
                                ...showMore,
                                first: !showMore.first,
                              })
                            }
                          >
                            {showMore.first ? (
                              <img
                                className="ml-10"
                                src="/img/arrow_down.svg"
                              />
                            ) : (
                              <img
                                className="ml-10 rotate-180"
                                src="/img/arrow_down.svg"
                              />
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="ml-20">
                            <div
                              className="cursor-pointer flex"
                              onClick={() =>
                                setAdd({ ...add, first: !add.first })
                              }
                            >
                              {add.first ? (
                                <>
                                  <img src="/img/remove.svg" />
                                  <span className="ml-1">Quitar</span>
                                </>
                              ) : (
                                <>
                                  <img src="/img/add.svg" />
                                  <span className="ml-1">Agregar</span>
                                </>
                              )}
                            </div>
                          </div>
                          {showMore.first && (
                            <p className="w-72 ml-20 mt-4">
                              He salido de casa a las cuatro menos cinco para ir
                              a la academia de ingles de mi pueblo (Sant Cugat,
                              al lado de Barcelona) con mi bici, na llego a la
                              academia que está en el centro del pueblo en una
                              plaza medio-grande y dejo donde siempre la bici
                              atada con una pitón a un sitio de esos de poner
                              las bicis y mucho más
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="flex">
                          <img className="mr-10" src="/img/icon-extra1.svg" />
                          <div className="mr-10 w-40">
                            <h3>Choque y/o pasarte la luz roja</h3>
                          </div>
                          <div
                            className="cursor-pointer flex w-10"
                            onClick={() =>
                              setShowMore({
                                ...showMore,
                                second: !showMore.second,
                              })
                            }
                          >
                            {showMore.second ? (
                              <img
                                className="ml-10"
                                src="/img/arrow_down.svg"
                              />
                            ) : (
                              <img
                                className="ml-10 rotate-180"
                                src="/img/arrow_down.svg"
                              />
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="ml-20">
                          <div
                              className="cursor-pointer flex"
                              onClick={() =>
                                setAdd({ ...add, second: !add.second })
                              }
                            >
                              {add.second ? (
                                <>
                                  <img src="/img/remove.svg" />
                                  <span className="ml-1">Quitar</span>
                                </>
                              ) : (
                                <>
                                  <img src="/img/add.svg" />
                                  <span className="ml-1">Agregar</span>
                                </>
                              )}
                            </div>
                          </div>
                          {showMore.second && (
                            <p className="w-72 ml-20 mt-4">
                              He salido de casa a las cuatro menos cinco para ir
                              a la academia de ingles de mi pueblo (Sant Cugat,
                              al lado de Barcelona) con mi bici, na llego a la
                              academia que está en el centro del pueblo en una
                              plaza medio-grande y dejo donde siempre la bici
                              atada con una pitón a un sitio de esos de poner
                              las bicis y mucho más
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="flex">
                          <img className="mr-10" src="/img/icon-extra1.svg" />
                          <div className="mr-10 w-40">
                            <h3>Atropello en la vía Evitamiento</h3>
                          </div>
                          <div
                            className="cursor-pointer flex w-10"
                            onClick={() =>
                              setShowMore({
                                ...showMore,
                                third: !showMore.third,
                              })
                            }
                          >
                            {showMore.third ? (
                              <img
                                className="ml-10"
                                src="/img/arrow_down.svg"
                              />
                            ) : (
                              <img
                                className="ml-10 rotate-180"
                                src="/img/arrow_down.svg"
                              />
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="ml-20">
                          <div
                              className="cursor-pointer flex"
                              onClick={() =>
                                setAdd({ ...add, third: !add.third })
                              }
                            >
                              {add.third ? (
                                <>
                                  <img src="/img/remove.svg" />
                                  <span className="ml-1">Quitar</span>
                                </>
                              ) : (
                                <>
                                  <img src="/img/add.svg" />
                                  <span className="ml-1">Agregar</span>
                                </>
                              )}
                            </div>
                          </div>
                          {showMore.third && (
                            <p className="w-72 ml-20 mt-4">
                              He salido de casa a las cuatro menos cinco para ir
                              a la academia de ingles de mi pueblo (Sant Cugat,
                              al lado de Barcelona) con mi bici, na llego a la
                              academia que está en el centro del pueblo en una
                              plaza medio-grande y dejo donde siempre la bici
                              atada con una pitón a un sitio de esos de poner
                              las bicis y mucho más
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="tab-container__content" id="c2"></div>
                    <div className="tab-container__content" id="c3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
