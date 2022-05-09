import React from "react";
import Fecha from "./Fecha";
import Humo from "./Humo";
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

  const [coordenadas, setCoordenadas] = React.useState(null);

  //  Fetching backend data

  React.useEffect(() => {
    if (fecha && turno) {
      // ...
    }
  }, [fecha, turno]);

  //

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Fecha
        fecha={fecha}
        turno={turno}
        setFecha={setFecha}
        setTurno={setTurno}
        setPrice={props.setPrice}
      />
      <Ubicacion
        ubicacion={ubicacion}
        handleUbicacion={(e) => setUbicacion(e)}
        setCoordenadas={setCoordenadas}
        setPrice={props.setPrice}
      />
      <Tiempo 
        tiempo={tiempo}
        setTiempo={setTiempo}
        setEstMay={props.setEstMay}
        setEstMen={props.setEstMen}
      />
      <Servicio 
        servicio={servicio}
        setServicio={setServicio}
      />
      <Humo 
        humo={humo}
        setHumo={setHumo}
      />
    </form>
  );
};

export default FormPresupuestar;
