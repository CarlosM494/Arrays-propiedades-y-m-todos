// Crea un array, y haz una copia de él.

function Copia(array) {
  var copiaArray = array.slice();
  console.log(array);
  return copiaArray;
}

var r = Copia(['Carlos', 'Miguel', 'Manuel', 'Esteban']);
console.log(r);
