import axios from "./axios";

export const fetchPrice = async (locData, tiempo, servicio, humo) => {
  try {
    const res = await axios.post("", {
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
