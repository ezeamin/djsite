import React from "react";
import BackButton from "../../backButton/BackButton";
import Title from "../../title/Title";
import FormNuevoEvento from "./formNuevoEvento/FormNuevoEvento";
import "./form.css";
import { fetchGet } from "../../../api/fetchingFunctions";

const PanelNewEvento = (props) => {
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

  const title = props.edit ? "Editar evento" : "Nuevo evento";

  return (
    <div className="container my-2">
      <BackButton
        className="mb-2"
        editForm={props.edit}
        fechaId={fechaId}
        eventoId={eventoId}
      />
      <Title text={title} />
      <FormNuevoEvento
        fechaId={fechaId}
        eventoId={eventoId}
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default PanelNewEvento;
