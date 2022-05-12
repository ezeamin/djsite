import React from "react";

const Extra = (props) => {
  return (
    <div className="mt-2">
      <p className="form__label">Extra</p>{" "}
      <textarea
        className="form__input"
        rows={3}
        style={{ resize: "none" }}
        placeholder="Info extra"
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Extra;
