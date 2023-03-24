console.log('Desustruracion');

//Desestructuracion
//Asignacion desestructurante

const persona = {
  nombre:'Tony',
  edad:25,
  apodo: 'Stark',
  clave: 'IronMan'
};

console.log(persona.edad);

//Desestructuracion

const {nombre, edad} = persona;
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad} años`);

//2)
//Desestructuracion en funciones
/*
const retornarPersona = (nombre)=>{
  console.log(nombre);
}

retornarPersona(persona);
*/

const returnarPersona = ({clave, nombre, edad})=>{
  //console.log(nombre, edad);
  return {
    nombreClave: clave,
    anios: edad,
    latlong:{
      latitud: 40.7142,
      longitud: -74.0059
    }
  };
}


//Primera forma de extraer un objeto y asignarlo a una constante lat long

const {nombreClave,anios, latlong:{latitud,longitud}} = returnarPersona(persona);


console.log(`Nombre clave: ${nombreClave}`);
console.log(`Anios: ${anios}`);

console.log(latitud,longitud);

///Tambien se puede extraer lat long de esta forma
/*
const {nombreClave,anios,latlong} = returnarPersona(persona);
const {latitud, longitud} = latlong;

console.log(latitud,longitud);
*/






