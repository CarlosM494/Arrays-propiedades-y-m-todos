// Crear un array con una longitud de 4 posiciones (dinámico y estático).

function E(long) {
  var array = [];
  for (i = 0; i < long; i++) {
    var n = prompt('Ingrese un número al arreglo');
    n = parseInt(n);
    console.log(n);
    array.push(n);
  }
  return array;
}

var r = E(4);
console.log(r);

function D() {
  var array = [];
  array.push(1);
  array.push(2);
  array.push(3);
  array.push(4);
  return array;
}

var r = D([]);
console.log(r);
