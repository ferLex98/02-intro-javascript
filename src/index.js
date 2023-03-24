
//Operador condicional ternario

 const activo = true;

/* Forma tradicional
  let mensaje = '';

  if(!activo){

    mensaje = 'Activo';
  }else{
    mensaje = 'Inactivo';
  }

*/


//Operador ternario
 const mensaje = (activo) ? 'Activo' : 'Inactivo'; 
 console.log(mensaje);


 const mensaje2 = (activo) ? 'Activo' : null;
 console.log(mensaje2);


 ///En react para validar condiciones simples 
 
const mensaje3 = !activo && 'Activo';
console.log(mensaje3);





