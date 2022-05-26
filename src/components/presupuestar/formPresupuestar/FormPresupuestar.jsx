import React from "react";
import Swal from "sweetalert2";
import { fetchPrice } from "../../../api/fetchingFunctions";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import Fecha from "./Fecha";
import Humo from "./Humo";
import { infoMessage } from "./infoMessage";
import Servicio from "./Servicio";
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
  const [prev, setPrev] = React.useState(null);

  //  Fetching backend data

  // React.useEffect(() => {
  //   if (fecha && turno) {
  //     // ...
  //   }
  // }, [fecha, turno]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // comprobaciones
    if (!tiempo || !servicio || !ubicacion) {
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

    let newPrice, distancia, formatFecha;

    if (
      prev &&
      prev.fecha === fecha &&
      prev.turno === turno &&
      prev.ubicacion === ubicacion &&
      prev.tiempo === tiempo &&
      prev.servicio === servicio
      // && prev.humo === humo
    ) {
      newPrice = Number.parseInt(prev.price);
      distancia = Number.parseFloat(prev.distancia);
      formatFecha = prev.formatFecha;
    } else {
      // no hay datos
      const res = await fetchPrice(
        fecha,
        turno,
        ubicacion,
        tiempo,
        servicio,
        true //humo
      );

      if (res.value) {
        newPrice = res.value;
        distancia = res.distancia;
        formatFecha = res.fecha;
      } else {
        newPrice = res;
        distancia = 0;
        formatFecha = "";
      }

      if (typeof newPrice === "number") {
        setPrev({
          fecha,
          turno,
          ubicacion,
          tiempo,
          servicio,
          humo: true,
          price: newPrice,
          distancia: res.distancia,
          formatFecha: res.fecha,
        });
      }
    }

    setLoading(false);

    if (typeof newPrice === "number") {
      props.setPrice(newPrice);
      infoMessage(
        turno,
        ubicacion,
        tiempo,
        servicio,
        newPrice,
        distancia,
        formatFecha
      );
    } else {
      Swal.fire({
        title: "Error",
        text: newPrice
          ? newPrice
          : "No se pudo conectar con el servidor. Intentar nuevamente o contactar con Ezequiel",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  //

  return (
    <form onSubmit={handleSubmit}>
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
      {/* <Humo humo={humo} setHumo={setHumo} /> */}
      <button
        className="mt-3 mb-2 form__button form__button__submit"
        type="submit"
      >
        Calcular
      </button>
      <div className="text-center py-2 mb-1">
        <a href="https://bit.ly/tyc-djezeamin-1" target="_blank" rel="noopener noreferrer" className="tyc">Terminos y condiciones</a>
      </div>
    </form>
  );
};

export default FormPresupuestar;
