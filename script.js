import { usuarios } from "./src/config/database";
import { alertaRedireccion } from "./src/utils/alertas";    

let btnLogin = document.querySelector("#login");
btnLogin.addEventListener("click", () => {
  let correo = document.querySelector("#email").value;
  let contrasena = document.querySelector("#password").value;
    let usuarioAut = usuarios.find((usuario) => usuario.correo === correo && usuario.contrasena === contrasena);
    if (usuariAuto) {
     return alertaRedireccion("Bienvenido al sistema");
    } else {
     return alertaRedireccion("Correo o contraseña incorrectos");
    }
});
