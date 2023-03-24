console.log('Hola mundo');

const persona={
  nombre: 'Michelle',
  apellido: 'Nuñez',
  edad: 45,
  direccion:{
    cuidad: 'Ambato',
    zip:'123165',
    lat:'14.0252',
    lng:'34.0215'
  }
}
console.log( persona );
console.log( persona.nombre );
 //Para ver en modo tabla

console.table(persona); 

///------------------
//Se copia la referencia del espacio memoria 
const persona2 = persona;

persona2.nombre='Alberto';

console.log(persona2);
//Estamos cambiando el valor del objeto
//console.log( persona );
///Nota: Esto no e aconsejable porque como se puede ver el valor del objeto original es cambiado
///------------


//Crear un clon: es recomendable crear un nuevo obj y poner las pripiedades
const persona3 = {...persona}
persona3.nombre = 'Fernanda';
console.log("Objeto clonado: "+ persona3);


