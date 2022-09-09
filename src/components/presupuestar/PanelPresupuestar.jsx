import React from "react";
// import Swal from "sweetalert2";
import BackButton from "../backButton/BackButton";
import Title from "../title/Title";
import FormPresupuestar from "./formPresupuestar/FormPresupuestar";
import Info from "./info/Info";
import "./presupuestar.css";
import Price from "./price/Price";

const PanelPresupuestar = () => {
  const [estMay, setEstMay] = React.useState(false);
  const [estMen, setEstMen] = React.useState(false);

  const [price, setPrice] = React.useState("0");

  // React.useEffect(() => {
  //   Swal.fire({
  //     // title: "",
  //     text: "Antes de presupuestar, recordá revisar si la fecha de tu evento está disponible. Podés hacerlo en la opcion 'fechas disponibles' en el menú de inicio.",
  //     icon: "info",
  //     confirmButtonText: "Ok",
  //     confirmButtonColor: "#ccc",
  //   });
  // }, []);

  return (
    <div className="container">
      <div className="presupuestar__header mb-2">
        <BackButton className="my-2" />
        <Price price={price} estMay={estMay} estMen={estMen} />
      </div>
      <Title text="Presupuestar" />
      <Info />
      <FormPresupuestar
        setEstMay={setEstMay}
        setEstMen={setEstMen}
        setPrice={setPrice}
      />
    </div>
  );
};

export default PanelPresupuestar;
