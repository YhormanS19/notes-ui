export function alertaRedireccion(mensaje, icono, ruta) {
  let timerInterval;
  Swal.fire({
    title: mensaje,
    html: "Sera redireccionado en <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    icon: icono,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      window.location.href = ruta;
    },
  })
}
export function alertaGeneral(titulo, mensaje, icono) {
  Swal.fire({
  title: titulo,
  text: mensaje,
  icon: icono
});
}