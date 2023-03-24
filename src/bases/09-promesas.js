//Promesas Js

import { getHeroes } from "./bases/08-imp-exp";
import heroes from "./data/heroes";

//Las promesas se crean con argumentos llamados callback
//callback recibe: resolve y reject
/*
const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //Importando funciones
        const p1 = getHeroes(21)
       // console.log(p1);

        //console.log('2 segundos despues');
        resolve(p1);
        
        //reject(p1)
    }, 2000);
});


promesa.then((heroes)=>{
    console.log(heroes);
})
.catch((err) =>  console.log(err))

*/

const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            //Importando funciones
            const p1 = getHeroes(id);
            
            if(p1){ 
                resolve(p1);
            }else{
                reject('No se ha encontrado');
            }
            
         
        }, 2000);
    });


}

getHeroeByIdAsync(1)
.then(heroes => console.log(heroes))
.catch(console.warn);