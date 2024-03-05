/*-------------------FONCTIONS-----------------*/

/*
          Un fonction est un bloc réutilisable 
          qui peut être appelé à partir d'autres parties de votre code pour effectuer une tâche spécifique.
          Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites 
          et plus facile à gérer,
          elles permettent de réutiliser le même code plusieurs fois sans avoir à le copier coller

*/

let firstName = "thomas";

//  Déclaration de foonction
// function hello (){
//     let firstName = 'Subarnan'
//     let lastName = 'SRIRANGANATHAN'
//     console.log (' Bonjour ' + firstName + ' ' + lastName);
// }

function hello(x, y) {
  console.log(" Bonjour " + x + " " + y);
}

hello("thomas", "dupuis");

console.log("fhjggj");

hello("ronaldo", "pcr");

// Déclarer une fonction qui prend 3 parametre
//declare un variable TVA
//elle multiplie les 3 nom et la TVA
// recupère le resultat dans une variable

// appelez la fonction

function grr(x, y, z) {
  let TVA = 20 / 100;
  let result = x * y * z * TVA;

  return result;
}

const resultat = grr(14, 67, 90);
console.log(resultat);

// Il est possible de sauvegarder une fonction dans une variable
// On les appellle des fonctions anonymes
// appelez la fonction
function math(x, y) {
  return x * y;
}

math(12, 89);
console.log(resultat);

// fonction addition

const add = function (x,y) {
    return x + y;
}
const toto = add(12,89);
console.log (toto)

// // Arrow function (fonction fléché)
// //  Nouvelle syntaxe introduite avec ES6 (2015)
// const divide = ()=>{
//     return x / y;
// };

// const result = divide(23 , 90);
// console.log(result)



// const arrow = (x) =>{
//      return x * 2
//     };

// Il existe des façon encore plus concise d'écrire les fonctions fléchés
const arrow = x => x * 2;
const r = arrow(45)
console.log(r);

// Créer une fonction fléché helloYou avec un parametre qui affiche bonjour + PRENOM

const helloYou = (name)=>{ 
    const message = `Bonjour , ${name}`
    return message
} 

const message = helloYou ('SUBAR')
console.log(message);

// Demander à l'utilisateur de rentrer un nombre
// Creer une fonction qui prend en parametre un nombre
// Et qui affiche dans la console si le nombre est pair ou impair (modulo)
// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 256 en parametre

const nombreUtilisateur = prompt ("Entrer un nombre")
 const verifPairImpair =  (nombre) => {
    if ( nombre % 2 === 0) {
        console.log(nombre + " est un nombre pair")
    }else{
        console.log(nombre + " est un nombre impair")
        
    }

};



verifPairImpair (5);
verifPairImpair (256);


// Déclarer une variable qui contient un nombre (demandez à l'utilisateur)
// let response = prompt ('Donnez-moi un nombre !');

// if(response % 3 === 0 && response%5 ==0) {
//     console.log ('Fizz');
// } else if ( response % 5 ==0) {
//     console.log('Buzz');

// }else if ( response %3 ==0 ) {
//     console.log('fizzbuzz');
// } else {
//     console.log(response)
// }

// transformer en fonction le jeu du fizzbuzz
let response = prompt ('donnez-moi un nombre !');

const fizzbuzz = (x)=>{
    if(x % 3 === 0 && x%5 ==0) {
        console.log ('Fizz');
    } else if ( x % 5 ==0) {
        console.log('Buzz');
    
    }else if ( x %3 ==0 ) {
        console.log('fizzbuzz');
    } else {
        console.log(x)
    }

};

fizzbuzz (response)


