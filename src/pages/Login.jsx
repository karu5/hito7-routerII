import { useState } from "react";
import Swal from "sweetalert2";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validaFormulario = (e) => {
    e.preventDefault();
    if (email.toLowerCase().trim() == "" || password.trim() == "") {
      Swal.fire({
        title: "Error!",
        text: "Todos los campos deben ser completados",
        icon: "warning",
        timer: 2000,
        confirmButtonText: "Cerrar",
      });
    } else {
      if (password.length >= 6) {
        Swal.fire({
          title: "Success!",
          text: "Sesión iniciada correctamente",
          icon: "success",
          timer: 2000,
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "La contraseña debe contener al menos 6 caracteres",
          icon: "warning",
          timer: 2000,
          confirmButtonText: "Cerrar",
        });
      }
    }

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{ width: "25rem" }}
          className="d-flex justify-content-center flex-column align-items-center border border-3 border-warning-subtle rounded-3 gap-3 mt-3 mb-3 pt-3 pb-3"
        >
          <h1>Iniciar sesión</h1>
          <div>
            <form onSubmit={(e) => validaFormulario(e)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="mensajeCorreo"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-dark">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;