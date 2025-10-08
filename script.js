import { usuarios } from "./src/config/database.js";
import { alertaRedireccion } from "./src/utils/alertas.js";
import { alertaGeneral } from "./src/utils/alertas.js";
import { guardarLocalStorage } from "./src/config/local-storage.js";
import { generateToken } from "./src/utils/generadores-codigos.js";

let btnLogin = document.querySelector("#login");
btnLogin.addEventListener("click", () => {
  let correo = document.querySelector("#email").value;
  let contrasena = document.querySelector("#password").value;
  let usuarioAut = usuarios.find(
    (usuario) => usuario.correo === correo && usuario.contrasena === contrasena
  );
  if (usuarioAut) {
    let token = generateToken();
    console.log(token);
    guardarLocalStorage("token", token);
    guardarLocalStorage("usuario", usuarioAut);
    return alertaRedireccion(
      "Bienvenido al sistema",
      "success",
      "/src/pages/html/home.html"
    );
  }
  return alertaGeneral(
    "Error de autenticación",
    "Correo o contraseña incorrecta",
    "error"
  );
});
