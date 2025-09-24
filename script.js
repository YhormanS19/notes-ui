import { usuarios } from "./src/config/database";

let btnLogin = document.querySelector("#login");
btnLogin.addEventListener("click", () => {
  let correo = document.querySelector("#email").value;
  let contrasena = document.querySelector("#password").value;
    let usuarioAut = usuarios.find((usuario) => usuario.correo === correo && usuario.contrasena === contrasena);
    if (usuariAuto) {
      alert(`Bienvenido, ${usuario.nombre}`);
    } else {
      alert("Correo o contraseña incorrectos");
    }
});
