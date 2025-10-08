export function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export function generateToken() {
  let token = 0;
  for (let index = 1; index <= 10; index++) {
    token += Math.random().toString(36).substr(2);
  }
  return token;
}
export function generarId() {
return Math.random().toString(36).substring(2);
}


/* Math.random(): genera un número aleatorio entre 0 y 1, con maximo 16 posiciones decimales*/
