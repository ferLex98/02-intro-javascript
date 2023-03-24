console.log('Desustruracion de arreglos');

//Desestructuracion de arreglos
const personajes = ['Goku','Vegeta','Trunks'];

const [,,per] = personajes //En este caso tomara el trer valor

console.log(per);


//Desestructuracion de arreglso con funcions de flecha
 const retornaArreglo = ()=>{
    return ['ABC', 123]
 }

 const [letras, numeros] = retornaArreglo();
 console.log(letras,numeros);
 

 //tAREA
 /*
 1. El primer valor del array se llama nombre
 2. Se llama setNombre;
 */ 

 const hello = (valor)=>{
  return [valor, ()=>{ console.log('Hola mundo') } ];
 }

 const [nombre, setNombre] = hello('Goku');

console.log(nombre);
setNombre();
