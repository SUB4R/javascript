/*-----------------------Manipulation du DOM----------------------*/

/*

Le DOM (Document Object Model) en Javascript
est une representation en mémoire d'un document HTML chargé par le 
navigateur
Le DOM represente chaque élément du document comme un objet Javascript
qui peut être manipulé et modifié à travers le code Javascript

*/
// ? La methode `getElementById()``
const mainTitle = document.getElementById('main-title');
console.log(mainTitle);
mainTitle.style.fontFamily = 'Arial'

/* 
?La methode `getElemntByTagName()``
getElementsByClassName renvoi une HTMLCOLLECTION
sur laquelle on pourra itérer avec la boucle for(){}
*/



// Faire une boucle sur l'HTMLCollection paragraphes
// 
// const paragraphes = document.getElementsByTagName('p')
// for(let i = 0 ; i<paragraphes.length ; i++){
// paragraphes[i].style.color = 'purple'
//     ;}

//     /* 

// ?La methode `getElementsByClassName()`

//     */
//    const title = document.getElementsByClassName('title')
//    console.log('title');
// mettre en violet la couleur de fond des elements qui ont la class title

// for(let i=0;i<title.length;i++){
//     title[i].style.backgroundColor = 'purple'
// }

/*

?La methode `querySelector() `

*/

const cssProperties = document.querySelector ('.title');
cssProperties.style.fontSize = '20px'
console.log(cssProperties);

/*

?La methode `querySelectorAll() `
querySelectorAll() renvoi une NodeList
sur laquelle on pourra itérer avec la boucle `for()`, for(...of...) et la méthdode `forEach()`

*/

//recuperer tous les paragraphes avec la methode querySelectorAll()
// 
// souligner les paragraphes

const paragraphes = document.querySelectorAll('p')
// console.log(paragraphes)
// for(let paragraphe of paragraphes){
//     paragraphe.style.textDecoration = 'underline '
// }

paragraphes.forEach(function(paragraphe){
paragraphe.style.textDecoration = 'underline'
})

// selectionner tous les éléments qui ont la class txt-uppercase
// tous les mettre en majuscule

const uppercase = document.querySelectorAll('txt-uppercase')
uppercase.forEach(function(uppercases){
    uppercases.style.text-transform = 
})