import React, { useRef } from "react";

const BasicInput = (props) => {
  const label = props.label;

  const campo = useRef();

  const handleBlur = async (e) => {
    if(e.target.value.trim() === ""){
      campo.current.classList = "form__input form__input--error";
    } else {
      campo.current.classList = "form__input";
    }
  };

  return (
    <div className="mb-3">
      <p className="form__label">{label}</p>{" "}
      <input
        className="form__input"
        placeholder={props.placeholder}
        value={props.value}
        ref={campo}
        onBlur={handleBlur}
        type={props.type ? props.type : "text"}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
};

export default BasicInput;
