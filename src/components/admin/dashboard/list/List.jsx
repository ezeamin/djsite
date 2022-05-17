import React from "react";
import { fetchGet } from "../../../../api/fetchingFunctions";
import Event from "./event/Event";
import "./list.css";
import Loading from "../../loading/Loading";

const List = () => {
  const [dates, setDates] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [empty, setEmpty] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetchGet("/events");

      if(res.status === 204){
        setEmpty(true);
      }
      else if(res.status !== 200){
        setError(true);
      }
      else setDates(res.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  if(loading) return <Loading />
  if(empty) return (
    <p className="mb-0 text-light text-center p-5 fw-bold">No hay eventos!</p>
  )
  if(error) return (
    <p className="mb-0 text-light text-center p-5 fw-bold">ERROR</p>
  )
  return (
    <div className="mt-3">
      {dates.map((date, index) => {
        if (date.turnos.length >= 2) {
          return date.turnos.map((turno, index) => {
            return <Event fechaId={date._id} formattedFecha={date.formattedFecha} fecha={date.fecha} {...turno} key={index} />;
          });
        }

        return <Event fechaId={date._id} formattedFecha={date.formattedFecha} fecha={date.fecha} {...date.turnos[0]} key={index} />;
      })}
    </div>
  );
};

export default List;
