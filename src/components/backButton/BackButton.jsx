import React from "react";
import { useNavigate } from "react-router-dom";
import "./backButton.css";

const BackButton = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const deleteData = () => {

  }

  const className = props.className
    ? props.className + " backButton"
    : "backButton";

  return (
    <div className="d-flex justify-content-between align-items-center">
      <button onClick={handleClick} className={className}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      {props.editForm && (
        <div className="title__button title__button--trash" onClick={deleteData}>
          <i className="fa-solid fa-trash"></i>
        </div>
      )}
    </div>
  );
};

export default BackButton;
