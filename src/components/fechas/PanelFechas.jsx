import React from "react";
import { fetchFechas } from "../../api/fetchingFunctions";
import BackButton from "../backButton/BackButton";
import LoadingScreen from "../presupuestar/loadingScreen/LoadingScreen";
import Title from "../title/Title";
import FechaItem from "./FechaItem";

const PanelFechas = () => {
  const [fechas, setFechas] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetching = async () => {
      const res = await fetchFechas();

      console.log(res);

      if (res.status === 200) setFechas(res.data);
      else setError(true);

      setLoading(false);
    };

    fetching();
  }, []);

  if (loading) {
    return (
      <div className="my-5 py-5">
        <LoadingScreen className="py-5 loadingScreen--transparent" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="container py-2">
        <BackButton />
        <div className="py-5 text-center">
          <h1 className="main__title ">Error 💔</h1>
          <p className="mb- text-light">
            Hubo un problema al contactar con el servidor. Por favor, intentá
            nuevamente en un rato.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="container my-3">
      <Title text="Proximas fechas" />
      {fechas.map((fecha, index) => {
        if (fecha.turnos.length > 1) {
          return fecha.turnos.map((turno, index) => {
            return (
              <FechaItem
                key={index}
                name={turno.name}
                turno={turno.turno}
                formattedFecha={fecha.formattedFecha}
              />
            );
          });
        } else
          return (
            <FechaItem name={fecha.turnos[0].name} turno={fecha.turnos[0].turno} formattedFecha={fecha.formattedFecha} key={index} />
          );
      })}
    </div>
  );
};

export default PanelFechas;
