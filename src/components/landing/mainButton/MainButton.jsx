import React from "react";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./mainButton.css";

const MainButton = (props) => {
  const id = "landing__button-" + props.type;
  const className =
    props.icon +
    (props.brands ? " fa-brands text-light" : " fa-solid text-light");
  const buttonClassName =
    "mt-3 landing__button" +
    (props.disabled ? " landing__button--disabled" : "");
    
    const navigate = useNavigate();

  const handleClick = () => {
    if (!props.disabled) {
      if(props.internal) navigate(props.link);
      else window.location.href = props.link;
    }
  }

  return (
    <button id={id} className={buttonClassName} onClick={handleClick}>
      <div className="landing__button__content">
        <p className="mb-0">{props.text}</p>
        <i className={className}></i>
      </div>
      {props.disabled && (
        <div className="text-start landing__button__proximamente mb-1">
          <Badge bg="danger">Proximamente</Badge>
        </div>
      )}
    </button>
  );
};

export default MainButton;
