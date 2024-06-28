// USING SILLYNAME NPM USING MODULE
import generateName from "sillyname"; 
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

// USING SUPERHEROES NPM USING MODULE 
import superheroes from 'superheroes';

var names = superheroes
const randomIndex = Math.floor(Math.random() * names.length);
const randomSuperheroName = names[randomIndex];

console.log(`I am ${randomSuperheroName}`); 

