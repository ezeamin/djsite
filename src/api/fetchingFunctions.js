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
    return err.response.data.message;
  }
};
