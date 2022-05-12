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
  const [prev, setPrev] = React.useState(null);

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

    let newPrice,distancia,formatFecha;

    if (
      prev &&
      prev.fecha === fecha &&
      prev.turno === turno &&
      prev.ubicacion === ubicacion &&
      prev.tiempo === tiempo &&
      prev.servicio === servicio &&
      prev.humo === humo
    ) {
      newPrice = Number.parseInt(prev.price);
      distancia = Number.parseFloat(prev.distancia);
      formatFecha = prev.fecha;
    } else {
      // no hay datos
      const res = await fetchPrice(
        fecha,
        turno,
        ubicacion,
        tiempo,
        servicio,
        humo
      );

      if(res.value){
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
          humo,
          price: newPrice,
          distancia: res.distancia,
          formatFecha : res.fecha,
        });
      }
    }

    setLoading(false);

    if (typeof newPrice === "number") {
      props.setPrice(newPrice);
      const signo = tiempo === "Menos" ? "<" : tiempo==="Mas" ? ">" : "";
      const title = `${signo} $ ${newPrice}`;

      Swal.fire({
        title: title,
        text: "Este valor es solo estimativo y no necesariamente final. Por favor, contactar con Ezequiel para confirmar y continuar el proceso",
        cancelButtonText: "Cerrar",
        showCancelButton: true,
        confirmButtonColor: "#77dd77",
        cancelButtonColor: "#8d8d8d",
        confirmButtonText: "Contactar por WhatsApp",
        footer: `Recomiendo leer los&nbsp;<a href="https://bit.ly/tyc-djezeamin-1" target="_blank" class="mb-0 form__swal__link">terminos y condiciones</a>`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { value: name } = await Swal.fire({
            title: "Ingresá tu nombre",
            input: "text",
            inputLabel: "Nombre",
            showCancelButton: true,
            confirmButtonColor: "#77dd77",
            cancelButtonColor: "#8d8d8d",
            confirmButtonText: "Continuar",
            cancelButtonText: "Cancelar",
            inputValidator: (value) => {
              if (!(value.trim())) {
                return "Por favor, escribí tu nombre";
              }
            },
          });

          if (!name) return;

          let ubic = ubicacion.replaceAll(" ", "%2520");

          const link = `https://www.google.com/maps/search/?api=1%26query=${ubic}`;

          const text = `Hola Ezequiel, soy ${name} y quiero presupuestar la siguiente fiesta:
          Fecha: ${formatFecha}
          Turno: ${turno}
          Ubicación: ${ubicacion} (${distancia}km)
          Tiempo: ${tiempo} horas
          Servicio: ${servicio}
          Humo: ${humo ? "Si" : "No"}

          El presupuesto es de: ${title}
          
          `;

          const url = `https://wa.me/+5493815038570?text=${encodeURI(text)+link}`;
          window.open(url, "_blank").focus();
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: newPrice ? newPrice : "No se pudo conectar con el servidor. Intentar nuevamente o contactar con Ezequiel",
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
