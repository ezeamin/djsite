import React from "react";
import Event from "./event/Event";
import "./list.css";

const mock = {
  fecha: "Vie 13 May (13/05/2022)",//"2020-06-01",
  turnos: [
    {
      turno: "Noche",
      name: "Haus",
      start: "22:00",
      end: "01:00",
      ubicacion: "25 de mayo 658, San Miguel de Tucuman, Argentina",
      servicio: "Basico",
      humo: false,
      value: 2500,
      paid: 0,
      extra: "",
      client: {
        name: "Ale",
        phone: "123456789",
      },
    },
  ],
};

const mock2 = {
  fecha: "Sab 14 May (14/05/2022)",//"2020-06-01",
  turnos: [
    {
      turno: "Tarde",
      name: "ADPUT",
      start: "16:00",
      end: "20:00",
      ubication: "En el medio del campo",
      servicio: "Sonido",
      humo: false,
      value: 6500,
      paid: 0,
      extra: "Posibles horas extras",
      client: {
        name: "Manolo",
        phone: "987654321",
      },
    },
  ],
};

const List = () => {
  const [dates, setDates] = React.useState([mock,mock2]);

  //   React.useEffect(() => {}, []);

  return (
    <div className="mt-3">
      {dates.map((date, index) => {
        if (date.turnos.length >= 2) {
          date.turnos.map((turno, index) => {
            return <Event fecha={date.fecha} {...turno} key={index} />;
          });
        } else {
          return <Event fecha={date.fecha} {...date.turnos[0]} key={index} />;
        }
      })}
    </div>
  );
};

export default List;
