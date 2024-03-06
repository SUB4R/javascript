/*--------------------OBJETS------------------------------*/

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.
const ar = [13]
console.log(ar[0]+6);

const person = {
    firstName : 'subarnan',
    lastName : 'SRIRANGANATHAN',
    age : 22,
    formation: ['algorithmique' ,  'html', 'git', 'javascript'],
    job : {
        name: 'formateur',
        hour : 35
    },
    getIdentify : function(){
        return `Je m'appelle subarnan SRIRANGANATHAN`
    }
};


// Pour accéder à la propriété d'un objet
console.log(person.job);

// créer un objet car
// model => 'audi'
// annee => 2015
// couleur => red
// option => tableau => siege chauffant, vitre electrique
// moteur => objet => cylindre, nombre de chevaux
// description => function => 'Je suis une audi sortie en 2010'

// Afficher le model
// Afficher la première option
// Afficher la decription

const car = {
    model : 'audi',
    annee : 2015,
    couleur : 'red',
    option : [' siege chauffant ', 'vitre electrique'],
    moteur : {
        pièce : 'cylindre',
        nombredechevaux : 130
    
    } ,
    getIdentifyCar : function(){
       return `Je suis une ${this.model} sortie en ${this.annee}`

    }
    

}
// On peut également acceder à une propriété d'un objet grace aux crochets et à sa clé en guise de valeur
console.log(car.model)
console.log(car.option[0])
console.log(car.getIdentifyCar())

// Pour pouvoir boucler sur un objet  il faut utiliser for(...in...){} car les objets sont des énumérables
for(let key in car){
    console.log(car[key]);
}
