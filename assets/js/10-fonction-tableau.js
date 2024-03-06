/*-------------------------------FONCTIONS SUR LES TABLEAUX------------------*/

// Créer un tableau d'animaux ('chat','chien','tigre','lion','requin','panda')

const animals = ['chat', 'chien', 'tigre', 'lion', 'requin', 'panda'];

// ? Attention la plupart des méthodes modifient le tableau de départ

//  Ajoute un ou plusieurs élément à la fin d'un tableau
// Renvoie la nouvelle longueur du tableau
let response = animals.push ('dauphin', 'loup');
console.log(response);

// Supprime le dernier élément du tableau
// Renvoie l'élément supprimé

response = animals.pop ();
console.log(response);

// Ajouter un ou plusieurs éléments au début du tableau
// Renvoie la nouvelle longueur du tableau
response= animals.unshift('hiboux');
console.log(response);

// Supprimer le premier élément du tableau
response = animals.shift()
console.log(response);

// Réorganise le tableau de la fin vers le début
animals.reverse()
console.log(animals);

// Modifier ou Ajouter ou Supprimer un éléments dans un tableau
// Ajouter un raton laveur en deuxieme position

animals.splice(1,0, 'raton laveur')
// Modifier chien en aigle
animals.splice(6,1,'aigle')

console.log(animals);

// Supprimer panda
animals.splice(2,1,)

console.log(animals);

// for(..of..){} permet de parcourir les éléments d'un objet itérable (ex: tableau, string)

// sur le tableau animals faire une boucle for() pour afficher tous les éléments du tableau

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// sur le tableau animals faire une boucle for(...of...) pour afficher tous les éléments du tableau
for (let animal of animals) {
    console.log(animal);
}

// forEach(){} est une méthode javascript qui permet d'itérer sur les éléments d'un tableau

animals.forEach(function(animal){
    console.log(animal);
});

// Declarer un tableau contenant (Paris, Berlin, Rome, Moscou, Londres, Madrid)

/*

Créer une fonction qui prend en parametre un tableau : 
             retire Madrid
             Ajoute au debut Vienne
             Rome devient Alger
             Retourne dans le tableau

*/

const capital = ["Paris", "Berlin", "Rome", "Moscou", "Londres", "Madrid"];
// const modifyArray = () => {
//     capital.pop()
//     capital.unshift('Vienne')
//     capital.splice(3,2, 'Alger')
//     console.log (capital)  
// };

// modifyArray(capital);

// console.log (capital)

const modifyArray = (array) => {
    array.pop()
    array.unshift('Vienne')
    array.splice(3,1, 'Alger')
   
    return array.length

};

const capitalLength = modifyArray(capital)


