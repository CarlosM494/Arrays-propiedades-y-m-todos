// Encuentra el índice de un elemento mediante su valor.

function IndiceConValor(array) {
  var posicion = array.indexOf('Manuel');
  return posicion;
}

var r = IndiceConValor(['Carlos', 5, 'Manuel', 6]);
console.log(r);
