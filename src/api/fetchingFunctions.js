import axios from "./axios";

export const fetchPrice = async (
  fecha,
  turno,
  locData,
  tiempo,
  servicio,
  humo
) => {
  try {
    const res = await axios.post("", {
      fecha,
      turno,
      locData,
      tiempo,
      servicio,
      humo,
    });

    return res.data;
  } catch (err) {
    try {
      return err.response.data.message;
    } catch (err) {
      return "Error al conectar con el servidor";
    }
  }
};

export const fetchEvent = async (event) => {
  try {
    const res = await axios.put("/event", event);

    return res;
  } catch (err) {
    try {
      return err.response.data.message;
    } catch (err) {
      return "Error al conectar con el servidor";
    }
  }
};

export const ping = async () => {
  try {
    await axios.get("/");
  } catch (err) {
    console.log(err);
  }
};
