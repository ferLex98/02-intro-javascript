console.log('Funciones');


//Se recomienda que las funciones sean constantes
//De ese modo, se puede evitar que se cambien los valores
/*
function saludar(nombre) {
  return `Hola, ${nombre}`
}

saludar = 20;
console.log(saludar('Goku'));
*/

//Funciones en Js
const saludar = function(nombre) {
  return `Hola, ${nombre}`
}
//saludar = 20;   
console.log(saludar('Goku'));


//Funciones flecha con parametros
const saludar2 = nombre=>{
  return `Hola, ${nombre}`;
}

console.log(saludar2('Michelle'));

//Otra forma de representar una funcion de flecha
const saludar3 = nombre=> `Hola, ${nombre}`

console.log(saludar3('Fernanda'));


//Funcion de flecha sin parametros
const saludar4 = ()=>`Hola mundo`

console.log(saludar4());

//Funcion flecha que retorna objetos
const getUser = () =>({
  uuid:'1236',
  username:'Michelle'
});

console.log(getUser());

/*
Transformar la siuinte funcion a flecha
const 

function getUsuarioAtivo(nombre){
  return{
    uuid:'hola',
    nombre:nombre
  }
};
*/ 

 const getUsuarioActivo = nombre=> ({
        uuid:'hola',
        nombre:nombre
  });

const usuarioActivo = getUsuarioActivo('Michelle');
console.log(usuarioActivo);
