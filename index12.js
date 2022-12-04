// Encuentra el primer elemento de un array basado en una condición.

function FirstElement(array) {
  var arrayWhitCondition = array.find((item) => item.posición == 0);
  return arrayWhitCondition.nombre;
}

var r = FirstElement([
  { posición: 0, nombre: 'Carlos' },
  { posición: 1, nombre: 'Ian' },
  { posición: 2, nombre: 'Alex' },
  { posición: 3, nombre: 'Angel' },
]);
console.log(r);
