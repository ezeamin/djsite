import React from "react";
import Swal from "sweetalert2";
import { fetchPrice } from "../../../api/fetchingFunctions";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import Fecha from "./Fecha";
import Humo from "./Humo";
import Servicio from "./Servicio";
import SubmitButton from "./SubmitButton";
import Tiempo from "./Tiempo";
import Ubicacion from "./Ubicacion";

const FormPresupuestar = (props) => {
  const [fecha, setFecha] = React.useState(undefined);
  const [turno, setTurno] = React.useState(undefined);
  const [ubicacion, setUbicacion] = React.useState("");
  const [tiempo, setTiempo] = React.useState(undefined);
  const [servicio, setServicio] = React.useState(undefined);
  const [humo, setHumo] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [ubicacionError, setUbicacionError] = React.useState(false);

  //  Fetching backend data

  React.useEffect(() => {
    if (fecha && turno) {
      // ...
    }
  }, [fecha, turno]);

  const handleSubmit = async () => {
    // comprobaciones
    if (!tiempo || !servicio) {
      return Swal.fire({
        title: "Error",
        text: "Completa los campos",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    if (ubicacionError) {
      return Swal.fire({
        title: "Error",
        text: "Introduce una dirección válida",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    // fetching
    setLoading(true);

    const newPrice = await fetchPrice(ubicacion, tiempo, servicio, humo);

    setLoading(false);

    if (typeof newPrice === "number") {
      props.setPrice(newPrice);
      const title = `$ ${newPrice}`;

      Swal.fire({
        title: title,
        text: "Este valor es solo estimativo y no necesariamente final. Por favor, contactar con Ezequiel para confirmar y continuar el proceso",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: newPrice,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  //

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {loading && <LoadingScreen />}
      <Fecha
        fecha={fecha}
        turno={turno}
        setFecha={setFecha}
        setTurno={setTurno}
      />
      <Ubicacion
        ubicacion={ubicacion}
        setUbicacion={setUbicacion}
        setPrice={props.setPrice}
        ubicacionError={ubicacionError}
        setUbicacionError={setUbicacionError}
      />
      <Tiempo
        tiempo={tiempo}
        setTiempo={setTiempo}
        setEstMay={props.setEstMay}
        setEstMen={props.setEstMen}
      />
      <Servicio servicio={servicio} setServicio={setServicio} />
      <Humo humo={humo} setHumo={setHumo} />
      <SubmitButton handleSubmit={handleSubmit} />
    </form>
  );
};

export default FormPresupuestar;
