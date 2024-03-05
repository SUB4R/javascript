/*---------------------------------TABLEAU-------------------------------*/

/*
  un tableau (array) est un type de donnée qui peut contenir plusieurs éléments
  on peut créer un tableau en utilisant des crochets [] et en y insérants les éléments séparés par des virgules 

*/

const moisDeLAnnee = ['janvier',
'février',
'mars',
'avril',
'mai',
'juin',
'juillet',
'aout',
'septembre',
'octobre',
'novembre',
'décembre',]

//On peut accéder à un élément du tableau en utilisant son index numérique.
// L'index du premier élément est toujours 0.
console.log('Mois de janvier', moisDeLAnnee[0]);
console.log('Mois de décembre', moisDeLAnnee[11])

// pour connaitre la longueur 
console.log(moisDeLAnnee.length)

for (let i = 0; i < moisDeLAnnee.length; i++) {
  console.log(moisDeLAnnee[i]);
}

function displayMonthOfYear(){
    
for (let i = 0; i < moisDeLAnnee.length; i++) {
    console.log(moisDeLAnnee[i]);
}
}

//  Créer un tableau avec tous les mois de l'année
// Afficher en console janvier et décembre
// Afficher tous les mois de l'année avec un boucle
// transformer cettte boucle en fonction sans parametre  
