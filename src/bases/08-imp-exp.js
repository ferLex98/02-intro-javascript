import heroes, { owner } from "../data/heroes";




//console.log(heroes);


export const getHeroes = (id) => heroes.find(element => element.id === id)

//console.log(getHeroes(2));


export const getHeroesByOwner = (owner)=> heroes.filter(element => element.owner === owner)


//console.log(getHeroesByOwner('DC'));


//Preba exportando owners del archivo heroes
const [Own1] = owner;
//console.log(Own1);