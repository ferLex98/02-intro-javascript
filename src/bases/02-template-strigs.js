console.log('Hola mundo');
 
const nombre = 'Michelle';
const apellido = 'Nuñez';

const nombreCompleto = nombre + ' '+ apellido;

console.log( nombreCompleto);


//Template strings

const nombreCompleto2 = `${nombre} ${apellido} ${1+1}`;

console.log(nombreCompleto2);

//
function getSaludo() {
  return 'para '+ nombre;
}

console.log(`Este es un saludo ${getSaludo(nombre)}`);

 