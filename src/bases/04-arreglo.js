console.log('Arrays');
//Arragloes en js
/*
//Solo se utiliza de esta formacuando se quieren crear arreglos fijos
const arreglo = new Array(100);
arreglo.push(1);   //Se utiliza para expandir el arreglo
                    //No es recomendable utilizar el push porque modifica el objeto principal
console.log(arreglo);
*/

const arreglo=[1,2,3,4];

let arreglo2=[...arreglo,5];

const arreglo3 = arreglo2.map(
  function (number) {
    return number*2
}); 


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);



