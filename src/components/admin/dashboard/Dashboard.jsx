import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../title/Title";
import Calendar from "./calendar/Calendar";
import List from "./list/List";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-3">
      <Title text="Dashboard" logout />
      <Calendar />
      <button className="form__button form__button__submit" onClick={() => navigate("/evento")}>
        Cargar evento
      </button>
      <button className="form__button form__button--blue mt-2" onClick={() => navigate("/fechaocupada")}>
        Cargar fecha ocupada
      </button>
      <List />
    </div>
  );
};

export default Dashboard;
