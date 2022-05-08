import React from "react";
import Bg from "../bg/Bg";
import "./landing.css";
import MainButton from "./mainButton/MainButton";

const Landing = () => {
  return (
    <>
      <div className="pt-5 text-center">
        <img
          className="landing__logo"
          src="/img/logo.png"
          alt="logo Dj Eze Amin"
        />
      </div>
      <h1 className="main__title landing__name">Dj Eze Amin</h1>
      <div className="text-center text-light">
        <p className="mb-0">Bienvenido a mi pagina 😀</p>
        <p className="mb-0">Seleccioná qué hacer a continuación</p>
      </div>
      <div className="container mt-2 landing__buttons">
        <MainButton
          text="Presupuestar"
          link="/presupuestar"
          icon="fa-dollar-sign"
          type="presupuestar"
          internal
          // disabled
        />
        <MainButton
          text="Fechas disponibles"
          link="#"
          icon="fa-calendar-days"
          type="fechas"
          internal
          // disabled
        />
        <MainButton
          text="Enganchados"
          link="https://www.mixcloud.com/ezeamin/"
          icon=" fa-music"
          type="musica"
        />
        <MainButton
          text="Contactar"
          link="https://wa.me/+5493815038570"
          icon="fa-whatsapp"
          type="contacto"
          brands
        />
        <MainButton
          text="Instagram"
          link="https://www.instagram.com/djezeamin/"
          icon="fa-instagram"
          type="redes"
          brands
        />
      </div>
    </>
  );
};

export default Landing;
