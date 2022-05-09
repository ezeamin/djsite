import React, { useRef } from 'react';

const Humo = (props) => {
    
  const humoTick = useRef();

  const handleHumo = () => {
    const prev = props.humo;
    props.setHumo(!props.humo);

    if (!prev) {
      humoTick.current.style.opacity = "100";
    } else {
      humoTick.current.style.opacity = "0";
    }
  };

    return (
        <div className="form-group mt-2 d-flex justify-content-between align-items-center">
        <p className="form__label">
          Humo <span className="fw-normal">(+$100)</span>
        </p>
        <div className="position-relative">
          <input
            type="checkbox"
            className="form__checkbox"
            checked={props.humo}
            readOnly
            onClick={handleHumo}
          />
          <i
            className="fa-solid fa-check form__checkbox__tick"
            onClick={handleHumo}
            ref={humoTick}
          ></i>
        </div>
      </div>
    );
};

export default Humo;