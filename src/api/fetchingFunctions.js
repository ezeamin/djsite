import axios from "./axios";

export const fetchPrice = async (fecha, turno, ubicacion, tiempo, servicio, humo) => {
  try {
    const res = await axios.post("", {
      fecha,
      turno,
      ubicacion,
      tiempo,
      servicio,
      humo,
    });

    return res.data;
  } catch (err) {
    try {
      return err.response.data.message;
    } catch (err) {
      return "Perdon! Error al conectar con el servidor. Reintentá o contactá con Ezequiel";
    }
  }
};

export const fetchFechas = async () => {
  try {
    const res = await axios.get("/events");

    return res;
  } catch (err) {
    try {
      return err.response.data.message;
    } catch (err) {
      return "Perdon! Error al conectar con el servidor. Reintentá o contactá con Ezequiel";
    }
  }
};

export const fetchFecha = async (date,turno) => {
  try {
    const res = await axios.put("/availabledate", { date,turno });

    return res;
  } catch (err) {
    try {
      return err.response.data.message;
    } catch (err) {
      return null;
    }
  }
};

export const ping = async () => {
  try {
    await axios.get("/");
  } catch (err) {
    console.log(err);
  }
}
