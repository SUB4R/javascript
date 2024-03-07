/*---------------------EVENT---------------------*/

/*

En javascript les événement permettent d'interagir avec 
les actions de l'utilisateur sur une page web , telles que le click,
 le scroll...

*/

// cibler le premier h2
// changer la taille de sa police sur 50px

const title = document.querySelector('#main-title');
const title2 = document.querySelector('#title-2');

title.addEventListener('dblclick', function(){

    title2.style.fontSize= '100px'
})

title.addEventListener('click', function(){

    title2.style.fontSize= '50px'
})

title.addEventListener('mouseenter', function(){

    title2.style.color = 'red'
})


// event quand souris survol

const bololo = document.querySelector('#div1')
console.log(bololo);

// `addEventListener()` permet de recuperer l'evenement (toutes les informations liées au clics)
// .target pet met par exemple de recuperer la balise HTML qui a réellement été cliqué

bololo.addEventListener('click', function (e) {
e.target.style.color = 'red'
});





















    // console.log('hello, world');
