// Elimina un elemento mediante su posición.

function IndiceEnPosicion(array) {
  array.splice(3, 1);
  return array;
}

var r = IndiceEnPosicion([1, 2, 3, 4, 5]);
console.log(r);

// Elimina varios elementos.

function IndiceEnPosicion(array) {
  array.splice(2, 3);
  return array;
}

var r = IndiceEnPosicion([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(r);
