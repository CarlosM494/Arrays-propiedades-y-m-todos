// Convierte un array en objeto.

function Objeto(array) {
  var arrayObject = Object.assign({}, array);
  return arrayObject;
}

var r = Objeto(['Lalo', 'Carlos', 'Leonardo', 'Itzel', 'Angel']);
console.log(r);
