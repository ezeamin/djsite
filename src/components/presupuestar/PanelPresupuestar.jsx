import React from "react";
import BackButton from "../backButton/BackButton";
import Title from "../title/Title";
import FormPresupuestar from "./formPresupuestar/FormPresupuestar";
import "./presupuestar.css";
import Price from "./price/Price";

const PanelPresupuestar = () => {
  const [estMay, setEstMay] = React.useState(false);
  const [estMen, setEstMen] = React.useState(false);

  const [price, setPrice] = React.useState("0");

  return (
    <div className="container">
      <div className="presupuestar__header">
        <BackButton className="my-2" />
        <Price price={price} estMay={estMay} estMen={estMen}/>
      </div>
      <Title text="Presupuestar" />
      <FormPresupuestar setEstMay={setEstMay} setEstMen={setEstMen} setPrice={setPrice}/>
    </div>
  );
};

export default PanelPresupuestar;
