import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchPut } from "../../../../api/fetchingFunctions";
import LoadingScreen from "../../../loadingScreen/LoadingScreen";
import Loading from "../../loading/Loading";
import BasicInput from "../../newEvento/formNuevoEvento/BasicInput";
import Error from "../../newEvento/formNuevoEvento/Error";
import Fecha from "../../newEvento/formNuevoEvento/Fecha";

const FormNuevaFecha = (props) => {
  const [name, setName] = React.useState("");
  const [fecha, setFecha] = React.useState("");
  const [turno, setTurno] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const { data } = props;
  
  React.useEffect(() => {
    if (data) {
      setName(data.name);
      setFecha(data.fecha);
      setTurno(data.turno);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // comprobaciones
    if (!fecha || !turno || !name) {
      return Swal.fire({
        title: "Error",
        text: "Completa los campos",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    // fetching
    setLoading(true);

    const event = {
      name,
      fecha,
      turno,
    };

    const link = props.data
      ? `/fechaocupada/edit/${props.fechaId}/${props.eventoId}`
      : "/fechaocupada";
    const res = await fetchPut(link, event);

    setLoading(false);

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Guardado",
        showConfirmButton: false,
        showCloseButton: false,
        timer: 1500,
      }).then(async () => {
        navigate("/");
      });
    } else {
      Swal.fire({
        title: "Error",
        text:
          typeof res === "string"
            ? res
            : "No se pudo conectar con el servidor. Intentar nuevamente.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  if (props.loading) {
    return <Loading />;
  }
  if (props.error) {
    return <Error />;
  }
  return (
    <form onSubmit={handleSubmit}>
      {loading && <LoadingScreen />}
      <BasicInput
        label="Razon"
        placeholder="Razon de ocupacion"
        value={name}
        setValue={setName}
      />
      <Fecha
        fecha={fecha}
        turno={turno}
        setFecha={setFecha}
        setTurno={setTurno}
      />
      <button
        className="mt-3 mb-2 form__button form__button__submit"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
};

export default FormNuevaFecha;
