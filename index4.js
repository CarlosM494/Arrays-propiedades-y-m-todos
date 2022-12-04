// Añade un elemento al final de un array.

function AF(long) {
  var array = [];

  for (i = 0; i < long; i++) {
    var n = prompt('Ingrese un número al final del arreglo');
    n = parseInt(n);
    console.log(n);
    array.push(n);
  }
  return array;
}

var r = AF(5);
console.log(r);
