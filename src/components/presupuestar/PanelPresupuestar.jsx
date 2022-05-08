import React from "react";
import BackButton from "../backButton/BackButton";
import Title from "../title/Title";
import FormPresupuestar from "./formPresupuestar/FormPresupuestar";
import "./presupuestar.css";
import Price from "./price/Price";

const PanelPresupuestar = () => {
  return (
    <div className="container">
      <div className="presupuestar__header">
        <BackButton className="my-2" />
        <Price price="0"/>
      </div>
      <Title text="Presupuestar" />
      <FormPresupuestar />
    </div>
  );
};

export default PanelPresupuestar;
