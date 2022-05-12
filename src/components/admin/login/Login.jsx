import React from "react";
import Swal from "sweetalert2";
import Title from "../../title/Title";

const Login = () => {
  const [codigo, setCodigo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (codigo === localStorage.getItem("codigo")) {
      Swal.fire({
        title: "Bienvenido",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        localStorage.setItem("isLogged", true);
        window.location.href = "/";
      });
    } else {
      Swal.fire({
        title: "Código incorrecto",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1500,
        icon: "error",
      });
    }
  };

  React.useEffect(() => {
    localStorage.setItem("codigo", "2002");
  }, []);

  return (
    <div className="container my-3">
      <Title text="Bienvenido" />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form__label">Codigo</label>
          <input
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            type="password"
            className="form__input"
            placeholder="Codigo"
          />
        </div>
        <button type="submit" className="form__button form__button__submit mt-3">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Login;
