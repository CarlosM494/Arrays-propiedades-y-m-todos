//  Elimina el último elemento de un array.

function EF(array) {
  array.pop();
  return array;
}

var r = EF(['Carlos', 5, 'Manuel', 6]);
console.log(r);


// Elimina el primer elemento de un array

function EI(array) {
  array.shift();
  return array;
}

var r = EI(['Carlos', 5, 'Manuel', 6]);
console.log(r);