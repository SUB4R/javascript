/*-----------------------------------CONCATENATION--------------------------------*/

// Concatenation : afficher du texte et des variables
//  déclarer des variables
// age, prenom, nom de famille, adresse, formation, organisme
const age = 22
const prenom = "Subarnan"
const nom = "Sriranganathan"
const adresse = "86 bd national 92000 Nanterre"
const formation = "dvp web"
const organisme = "doranco"

let information = " j'ai " + age + " ans et je m'appelle " + prenom + nom + " j'habite au " + adresse + " ,dont je suis formé en " + formation + " à " + organisme;

 information = " j\'ai " + age + " ans et je m\'appelle " + prenom + nom + " j\'habite au " + adresse + " ,dont je suis formé en " + formation + " à " + organisme;

//  template literals (ou litteraux de gabarits) permet l'interpolation (interpretation de javascript au sein d'une chaine de caractère)

 information = `j'ai ${age}  ans et je mappelle ${prenom} ${nom} j'habite au ${adresse}  ,dont je suis formé en  ${formation}   à  ${organisme} `

 console.log(information)

//  recuperer dans une variable le message
// Je m'apppelle NOM PRENOM, j'ai AGE ans et je suis en formation FORMATION à ORGANISME

// 3 façons '', "", ``