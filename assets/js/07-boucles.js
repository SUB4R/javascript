/*--------------------BOUCLES--------------------*/

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

/* 
La principale difference entre 'for' et 'while' :
'for' est généralement utilisé lorsque le nombre d'itérations est connu à l'avance
'while' est utilisé lorsque le nombre d'itérations est inconnu à l'avance et 
dépend d'une condition spécifique

*/

//  Boucle : for (){...}
//  boucle for qui affiche les nombres de 10 à 20
// for (let i = 10 ; i<=20 ; i++) {
//     console.log (i)
// }

// for (let i = 10 ; i<=20 ; i++) {
//     if (i % 2 == 0){
//         console.log (i)
//     }
// }
// // nombre paire de 10 à 20
// for (let i = 10 ; i<=20 ; i=i+2) {
//         console.log (i);
//     }

// Boucle :while (){...}
// afficher les nombres pairs de 10 à 20
let i = 10
while (i <= 20){
    console.log (i)
    i = i+2
  }

  // demandez un nombre à l'utilisateur tant que ce nombre n'est pas le bon dites le nombre est plus grand ou le nombre est plus petit
  let userInput = prompt('Donnez moi un nombre');
  const magicNumber = 99;
  while(userInput != magicNumber){
    if(userInput < magicNumber){
    userInput = prompt('donne moi un autre nombre plus grand');
    } else {
       userInput = prompt ('donne moi un autre nombre plus petit');
    }
  }

  console.log ('bravo , le nombre était' + magicNumber)

// Ecrire un programme qui demande à l'utilisateur de saisir un nombre entier compris 1 et 10.
//  Si la reponse n'est pas entre 1 et 10 , afficher que le message devait être compris entre 1 et 10
// Le programme doit ensuite dessiner un sapin de noêl composée d'étoiles (*)

//*
//**
//***
//****
//***** 

// let response = prompt('donne moi un nombre entre 1 et 10');

// while (response < 1 || response > 10){
//     response = prompt ('donne moi un nombre entre 1 et 10')
// }

// let stars = '*';
// for (let i = 0 ; i < response; i++) {
//     stars = stars+'*'
//     console.log (stars);
// }



  
    