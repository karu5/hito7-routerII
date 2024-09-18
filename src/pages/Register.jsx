import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validaFormulario = (e) => {
    const pattern = new RegExp(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    );
    e.preventDefault();
    if (
      email.toLowerCase().trim() == "" ||
      password.trim() == "" ||
      confirmPassword.trim() == ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Todos los campos deben ser completados",
        icon: "warning",
        confirmButtonText: "Cerrar",
        timer: 1500,
      });
    } else {
      if (password === confirmPassword && password.length >= 6) {
        Swal.fire({
          title: "Success!",
          text: "Registro completo, por favor revisa tu correo para continuar",
          icon: "success",
          confirmButtonText: "Cerrar",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Debe cumplir con los requisitos",
          icon: "warning",
          confirmButtonText: "Cerrar",
          timer: 1500,
        });
      }
    }
    

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{ width: "25rem" }}
          className="d-flex justify-content-center flex-column align-items-center border border-3 border-warning-subtle rounded-3 gap-3 mt-3 mb-3 pt-3 pb-3"
        >
          <h1>Regístrate</h1>
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
                <div className="text-danger mt-1">*Mínimo 6 caracteres</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPass"
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="text-danger mt-1">*Las contraseñas deben ser idénticas</div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-dark">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;