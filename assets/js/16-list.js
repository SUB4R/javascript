const avenger = document.querySelector ('#labase')
console.log(avenger);

avenger.addEventListener ('click' , function(a){

    
// a.target.style.fontSize = "28px"
// a.target.style.fontSize permet de recuperer la taille du texte 


if (a.target.style.fontSize == '' || a.target.style.fontSize == '16px') {
    a.target.style.fontSize = '50px'; 
 } else  {a.target.style.fontSize = '16px';
}

avenger.addEventListener('dblclick',function(e) {
const title = document.createElement ('h2')
title.textContent = e.target.textContent
const container = document.querySelector('#container')

container.prepend(title)

})
 
 
//  Si la taille du texte est égale à 16px
// On change la taille du texte à 50px
// Sinon 
// On change la taille du texte

console.log(a.target.style.fontSize);


}) 
// avenger.addEventListener ('dblclick' , function(a){

//     a.target.style.fontSize = "10px"
//     })

// a.target.style.fontSize permet de recuperer la taille du texte

// Quand on double cliqué sur la liste
// on va créer un evenement h2
// le texte de ce h2 sera le texte de l'élémeent de la liste sur lequel on a double cliqué
// On l'ajoute en haut (tout en haut avant le titre)


     