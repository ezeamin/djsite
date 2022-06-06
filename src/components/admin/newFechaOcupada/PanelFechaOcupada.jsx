import React from "react";
import { fetchGet } from "../../../api/fetchingFunctions";
import BackButton from "../../backButton/BackButton";
import Title from "../../title/Title";
import FormNuevaFecha from "./formNuevaFecha/FormNuevaFecha";

const PanelFechaOcupada = (props) => {
  const url = window.location.href;
  const urlSplit = url.split("/");
  const fechaId = urlSplit[urlSplit.length - 2];
  const eventoId = urlSplit[urlSplit.length - 1];

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetchGet(`/event/${fechaId}/${eventoId}`);

      if (res.status === 200) setData(res.data);
      else setError(true);

      setLoading(false);
    };

    if (props.edit) fetchData();
    else setLoading(false);
  }, [eventoId, fechaId, props.edit]);

  const title = props.edit ? "Editar compromiso" : "Nuevo compromiso";

  return (
    <div className="container my-2">
      <BackButton className="mb-2" editForm={props.edit} />
      <Title text={title} />
      <FormNuevaFecha data={data} loading={loading} error={error} fechaId={fechaId} eventoId={eventoId}/>
    </div>
  );
};

export default PanelFechaOcupada;
