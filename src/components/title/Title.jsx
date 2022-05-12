import React from "react";
import Swal from "sweetalert2";
import "./title.css";

const Title = (props) => {
  const logout = () => {
    localStorage.removeItem("codigo");
    localStorage.setItem("isLogged", false);
    Swal.fire({
      title: "Bye",
      timer: 1000,
      showConfirmButton: false,
      showCloseButton: false,
    }).then(() => {
      window.location.href = "/";
    });
  };

  const history = () => {};

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="main__title title mb-0">{props.text}</h1>
        {props.logout && (
          <div className="title__buttons">
            <div
              className="title__button title__button--history"
              onClick={history}
            >
              <i className="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div className="title__button" onClick={logout}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </div>
        )}
      </div>
      <hr className="title__hr" />
    </div>
  );
};

export default Title;
