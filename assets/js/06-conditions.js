/*------------------------INSTRUCTION CONDITIONNELLES------------------*/

// les opérateurs de comparaison (==, ===, !=, !==, > , >=, <, <=)

// declarer une constante condition vous lui donnez en valeur un nombre


// Si la conditopn est vraie ( truthy) , le bloc d'instruction est executé
// Sinon il est ignoré

const condition = 18

if(condition >= 18) {
    console.log('Vous êtes majeur')
}
// Verifier si ce nombre est superieur ou egal a 18 si c'est le cas affichez vous êtes majeur

// Déclarer une variable qui contient un nombre 
// Si le nombre est divisible par 3 afficher dans un alert 'Fizz'
// Si le nombre est divisible par 5 afficher dans un alert 'Buzz'
// Si le nombre est divisible par 3 et 5  afficher dans un alert 'FizzBuzz'
// Sinon afficher dans un alert le nombre

const response = prompt ('Donnez-moi un nombre')


if(response % 3 === 0 && response%5 ==0) {
    console.log ('Fizz');
} else if ( response % 5 ==0) {
    console.log('Buzz');

}else if ( response %3 ==0 ) {
    console.log('fizzbuzz');
} else {
    console.log(response)
}
 
// demandez un nombre

// if ce nombre est egale 12 

// verifiez avec == ===

const responsee = prompt ('Donne moi un nombre');

//  === vérifie à la fois la valeur et le type des valeurs comparées (opérandes)

if(responsee === "12") {
    console.log('bravo')
} else {
    console.log ('faux')
}

// demandez à l'utilisateur son animal préféré
// si c'est un chien 
// vous êtes quelqu'un de bien 
// si c'est un chat
//  Quelle drole de l'idée
// si c'est un poisson rouge 
// Je ne veux plus parler avec toi
// sinon
// je n'ai pas compris la réponse

const animal = prompt ('dit moi ton animal préféré')
if ( animal == 'chien') {
    console.log ("vous êtes quelqu'un de bien  ");
} else if (animal == 'chat'){
    console.log ("quelle drole d'idée")
} else if ( animal== 'poisson rouge') {
    console.log ('je ne veux plus parler avec toi')
} else { 
    console.log("je n'ai pas compris la réponse")
}

switch (animal) {


case 'chien':
case 'chat':
console.log("quelle drole d'idée")
break ;
case 'poisson rouge':
console.log ("Je ne veux plus parler avec toi");
break;
default :
console.log("je n'ai pas compris la réponse")

}
