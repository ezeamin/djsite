import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="landing__container">
        <div className="pt-5 text-center">
          <img
            className="landing__container__logo"
            src="/img/logo.png"
            alt="logo Dj Eze Amin"
          />
        </div>
        <h1 className="main__title landing__container__name">Dj Eze Amin</h1>
        <div className="text-center text-light">
          <p className="mb-0">Bienvenido a mi pagina 😀</p>
          <p className="mb-0">Seleccioná qué hacer a continuación</p>
        </div>
        <div className="container mt-2 landing__container__buttons">
          <button
            id="landing__container__button-presupuestar"
            className="landing__container__button mt-3"
          >
            <a href="#">Presupuestar</a>
            <i className="fa-solid fa-dollar-sign text-light"></i>
          </button>
          <button
            id="landing__container__button-fechas"
            className="landing__container__button mt-3"
          >
            <a href="#">Fechas disponibles</a>
            <i className="fa-solid fa-calendar-days text-light"></i>
          </button>
          <button
            id="landing__container__button-contacto"
            className="landing__container__button mt-3"
          >
            <a href="#">Contactar</a>
            <i className="fa-brands fa-whatsapp text-light"></i>
          </button>
          <button
            className="landing__container__button mt-3 bg-secondary"
          >
            <a href="#">Redes</a>
            <i className="fa-brands fa-instagram text-light"></i>
          </button>
        </div>
        <p className="copyright">With ♥ by Ezequiel Amin</p>
      </div>
      <img
        id="landing__dot-1"
        className="landing__dot"
        src="https://hype4.academy/_next/static/media/ovalShadow.793e2be7.svg"
        alt="dots for background effect"
      />
      <img
        id="landing__dot-2"
        className="landing__dot"
        src="https://hype4.academy/_next/static/media/ovalShadow.793e2be7.svg"
        alt="dots for background effect"
      />
      <img
        id="landing__dot-3"
        className="landing__dot"
        src="https://hype4.academy/_next/static/media/ovalShadow.793e2be7.svg"
        alt="dots for background effect"
      />
    </div>
  );
};

export default Landing;
