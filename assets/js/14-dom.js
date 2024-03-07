/*-----------------------------MANIPULATION DU DOM-----------------------*/
/*
        Le DOM'Docment Object Model) en Javascript est une représentation en mémoire d'un document HTML chargé par le navigateur 
        Le DOM représente chaque élement du document comme un objet Javascript qui peut être manipulé et modifié à travers le code Javascript
*/
const mainTitle=document.getElementById("main-title");
mainTitle.style.color="red"
// ?La méthode 'getElementByTagName
/* 
 getElementsByTagName renvoi une HTMLCollection
 sur laquelle on pourra itérer avc la boucle for(){}
*/
const para=document.getElementsByTagName("p")
console.log(para)
// Faire une boucle sur l'HTMLCollection paragraphes 
for(let i=0; i< para.length;i++){
    console.log(para[i])
    para[i].style.color="green"
}
// ? La méthode "getElementsByClassName()"
const title= document.getElementsByClassName("title")
console.log(title)
for(let i=0; i<title.length; i++){
    console.log(title[i])
    title[i].style.backgroundColor="purple"
}
/*
    ?La méthode  'querySelector()'
*/
const cssProprieties= document.querySelector("#title")
    // cssProprieties.style.fontSize='20px'
    console.log(cssProprieties)
/*
    ?La méthode 'querySelectorAll()'

*/
// Recupérer tous les paragraphes avc la methode querySelectorAll()
// souligner les paragraphes 
const cssProp=document.querySelectorAll('p')
console.log(cssProp)
for(let x of cssProp){
    x.style.textDecoration="underline"
}
// forEach
cssProp.forEach(function(y){
        y.style.textDecoration="underline"
})

// Selectionner tous les elements qui ont la class txt-uppercase
// tous les mettre en majuscule 
const uppercase= document.querySelectorAll('.txt-uppercase')
console.log(uppercase)
for(let y of uppercase){
    y.style.textTransform="uppercase"
}

/*  ---------------------------------------------
    Quelques proprietes liées aux éléments du DOM
    ---------------------------------------------
    En JavaScript, il existe plusieurs propriétés 
    pour accéder et modifier les éléments HTML sélectionnés dans le DOM. 
    Voici quelques-unes des propriétés les plus couramment utilisées :

*/

// La prop style permet de modifier le style
mainTitle.style.textTransform = 'uppercase'
// La méthode  `classList.add()` permet f'ajouter une classe à un élément HTML.
mainTitle.classList.add('txt-green', 'test')

// La méthode `classList.remove()` permet d'ajouter une classe à un éléméent HTML.
const paragrapheTest = document.querySelector('#paragraphe-test')
// paragrapheTest.classList.remove('txt-uppercase')

// La méthode `classList.contains()` permet de vérifier si un élément HTML possède une classe donnée.
const title2 = document.querySelector('#title-2')
const isTitle = title2.classList.contains ('chaussette')

// Modifier le texte => c'est pas si dur avec de la pratique

title2.innerText = 'c\' est pas si dur le js avec innertext'

// La prop innerHTML permet de recuperer ou de définir le contenu HTML d'un élément HTML (Le HTML est interprété).

title2.innerHTML = 'c\' est pas si dur  le js avec innerhtml'

// La propriete textContent permet de recuperer ou definir le contenu textuel d'un élément HTML
title2.textContent = "c'est <strong> pas si dur avec <strong> le JS"

// cibler le dernier paragraphe
// et ajouter l'attribut title avec la valeur je suis une pop-up ajouté en javascript

const lastParagraph = document.querySelector('#papa');
lastParagraph.setAttribute ('title','je suis une pop-up');
console.log(lastParagraph);

/* 
---------------------------------
Créer des éléments
--------------------------------

*/
// Creer un elemnt en Js
const newParagraphe = document.createElement('p')
newParagraphe.classList.add('new-paragraphe')
newParagraphe.textContent = 'Je suis le BOSS EN JS askipp'
// console.log(newParagraphe);

const paragrapheContainer = document.querySelector('#paragraphe-container')

//append() ajoute un element a la fin
// paragrapheContainer.append(newParagraphe)

// comment faire pour l'ajouter en haut de la div et non en bas

// prepend() ajoute un element au debut
paragrapheContainer.prepend(newParagraphe)
