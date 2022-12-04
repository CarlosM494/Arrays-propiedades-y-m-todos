// Añade un elemento al inicio de un array.

function AF(long) {
  var array = [];

  for (i = 0; i < long; i++) {
    var n = prompt('Ingrese un número al inicio del arreglo');
    n = parseInt(n);
    console.log(n);
    array.unshift(n);
  }
  return array;
}

var r = AF(5);
console.log(r);
