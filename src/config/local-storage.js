export function guardarLocalStorage(llave, valor) {
  localStorage.setItem(llave, JSON.stringify(valor));
}

export function consultarLocalStorage(llave) {
  return JSON.parse(localStorage.getItem(llave));
}

export function limpiarLocalStorage(llave) {
    localStorage.removeItem(llave);
}

/*
locaStorage.setItem() .JSON.stringify(): El local storage alamcena datos tipo string, es decir, 
una cadena de texto.
locaStorage.getItem() - JSON.parse(): Convierte una cadena de texto a su tipo de dato original.
locaStorage.removeItem()
*/
