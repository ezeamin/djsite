import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { fetchPut } from "../../../../api/fetchingFunctions";
import LoadingScreen from "../../../loadingScreen/LoadingScreen";
import Fecha from "./Fecha";
import Humo from "./Humo";
import Servicio from "./Servicio";
import Tiempo from "./Tiempo";
import Ubicacion from "./Ubicacion";
import Horarios from "./Horarios";
import BasicInput from "./BasicInput";
import Extra from "./Extra";
import Cliente from "./Cliente";
import Precio from "./Precio";
import Loading from "../../loading/Loading";
import Error from "./Error";

const FormNuevoEvento = (props) => {
  const [name, setName] = React.useState("");
  const [fecha, setFecha] = React.useState(undefined);
  const [turno, setTurno] = React.useState(undefined);
  const [start, setStart] = React.useState(undefined);
  const [end, setEnd] = React.useState(undefined);
  const [ubicacion, setUbicacion] = React.useState("");
  const [tiempo, setTiempo] = React.useState(undefined);
  const [servicio, setServicio] = React.useState(undefined);
  const [humo, setHumo] = React.useState(false);
  const [extra, setExtra] = React.useState("");
  const [clientName, setClientName] = React.useState("");
  const [clientPhone, setClientPhone] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [paid, setPaid] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [ubicacionError, setUbicacionError] = React.useState(false);

  const navigate = useNavigate();

  // Modify existing event

  const { data } = props;

  React.useEffect(() => {
    if (data) {
      setName(data.name);
      setFecha(data.fecha);
      setTurno(data.turno);
      setStart(data.start);
      setEnd(data.end);
      setUbicacion(data.ubicacion);
      setTiempo(data.tiempo);
      setServicio(data.servicio);
      setHumo(data.humo);
      setExtra(data.extra);
      setClientName(data.client.name);
      setClientPhone(data.client.phone);
      setPrice(data.price);
      setPaid(data.paid);
    }
  }, [data]);

  //  Fetching backend data

  React.useEffect(() => {
    if (fecha && turno) {
      // ...
    }
  }, [fecha, turno]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // comprobaciones
    if (
      !tiempo ||
      !servicio ||
      !ubicacion ||
      !fecha ||
      !turno ||
      !start ||
      !end ||
      !name ||
      !clientName ||
      !clientPhone ||
      !price
    ) {
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

    if (!paid) {
      setPaid(0);
    }

    // fetching
    setLoading(true);

    const event = {
      name,
      fecha,
      turno,
      start,
      end,
      ubicacion,
      tiempo,
      servicio,
      humo,
      extra,
      clientName,
      clientPhone,
      price,
      paid,
    };

    const link = props.data
      ? `/event/edit/${props.fechaId}/${props.eventoId}`
      : "/event";
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

  //

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
        label="Nombre del evento"
        placeholder="Nombre"
        value={name}
        setValue={setName}
      />
      <Fecha
        fecha={fecha}
        turno={turno}
        setFecha={setFecha}
        setTurno={setTurno}
      />
      <Horarios start={start} end={end} setStart={setStart} setEnd={setEnd} />
      <Ubicacion
        ubicacion={ubicacion}
        setUbicacion={setUbicacion}
        ubicacionError={ubicacionError}
        setUbicacionError={setUbicacionError}
      />
      <Tiempo tiempo={tiempo} setTiempo={setTiempo} new />
      <Servicio servicio={servicio} setServicio={setServicio} />
      <Humo humo={humo} setHumo={setHumo} />
      <Extra value={extra} setValue={setExtra} />
      <hr className="text-light" />
      <Cliente
        name={clientName}
        phone={clientPhone}
        setName={setClientName}
        setPhone={setClientPhone}
      />
      <hr className="text-light mt-4" />
      <Precio price={price} paid={paid} setPrice={setPrice} setPaid={setPaid} />
      <button
        className="mt-3 mb-2 form__button form__button__submit"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
};

export default FormNuevoEvento;
