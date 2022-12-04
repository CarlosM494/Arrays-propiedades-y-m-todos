// Devuelve un nuevo objeto que contiene los valores para cada índice del array.

function Objeto(array) {
  console.log(array);
  var arrayObject = Object.assign({}, array);
  return arrayObject;
}

var r = Objeto([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(r);
