/*---------------------------VARIABLE-------------------*/

// NB : les noms de variables sont sensibles à la casse
// On fait la différence entre les majuscules et les miniscules

// Déclaration de variable
let uneVariable;
let UNEVARIABLE;

// AFFECTATION d'une variable ( donne une valeur à la variable)
uneVariable="Je suis une variable";

// Les deux peuvent se faire en même temps
let hello = 'Hello,world!'
// On peut chnager la valeur d'une variable
uneVariable = hello;
console.log (hello);



// Le mot clé const permet de célarer une constante 
// Vous ne pouvez pas modifier une con,stante ( on dit qu'elle est imuable)
// const
// `const` va garntir que la valeur ne sooit pas modifié tout au long de l'execution du script

const constante = 'je suis une constante';
constante = 'autre chose';

// Le mot clé var permet aussi de déclarer des variables
// C'est une pratiqué désuète (c'était la seule façon avant 2015)
var past = 'je suis dépassé'
