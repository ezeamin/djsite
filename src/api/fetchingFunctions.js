import axios from "./axios";

export const fetchGet = async (link) => {
  try {
    const res = await axios.get(link);

    return res;
  } catch (err) {
    try {
      return err.response.data.message;
    } catch (err) {
      return "Error al conectar con el servidor";
    }
  }
};

export const fetchPut = async (link,data) => {
  try {
    const res = await axios.put(link, data);

    return res;
  } catch (err) {
    try {
      return err.response.data.message;
    } catch (err) {
      return "Error al conectar con el servidor";
    }
  }
};

export const fetchDelete = async (link) => {
  try {
    const res = await axios.delete(link);

    return res;
  } catch (err) {
    try {
      return err.response.data.message;
    } catch (err) {
      return "Error al conectar con el servidor";
    }
  }
}

export const ping = async () => {
  try {
    await axios.get("/");
  } catch (err) {
    console.log(err);
  }
};
