/* let age;

age= 37;

// let age = 37;

age = 40; // 

let adresse = "Calais";
console.log(age, adresse); // affiche le contenu des différentes var dans l'ordre  : 40 Calais

console.log("cours JS"); // affiche un message en dur
console.log(age, adresse); // affiche le contenu des différentes var dans l'ordre  : 40 Calais
console.log("Mon adresse est : " + adresse); 
*/


const nom="Dalian Tillier"; //string
const age = 22; //number
const moyenne= 18.5; //number
const isCool=true; //boolea
const x=null;  //object : type generique en js tout est objet
                //null : n'a pas de valeur
const y=undefined; // variable n'existe pas

console.log("la variable nom est de type : " + typeof "Dalian Tillier" )

console.log("la variable age est de type : " + typeof age )

console.log("la variable moyenne est de type : " + typeof age)

console.log("la variable isCool est de type : " + typeof "true")

console.log("Mon X est : " + typeof true + x)

console.log("Mon Y est : " + typeof undefined)

console.log("====================");

console.log(`Mon prénom en JS est : ${nom} et j'ai ${nom.length} caractères dans mon prénom`);
console.log(`Mon âge en JS est : ${age}`);
console.log(`Ma note en JS est : ${moyenne}`);
console.log(`La réponse de mon iscool en JS est : ${isCool}`);
console.log(`Mon axe X en JS est : ${x}`);
console.log(`Mon axe Y en JS est : ${y}`);

// nom en maj
console.log(`Mon nom en maj : ${nom.toUpperCase()}`);
// nom en min
console.log(`Mon nom en min : ${nom.toLowerCase()}`);
// extrait une sous chaine, les index de 0 à 4 ==> 4 caract
console.log(`Sous chaine : ${nom.substring(0,8)}`);
// prend les 4 caract et les transforme en maj
console.log(`Sous chaine : ${nom.substring(0,8).toUpperCase()}`);
console.log(nom.split(''));
const nomComplet = "Dalian Tillier La Garde";
console.log(nomComplet.split(' '));
const phrase ="Bonjour, je suis à la maison";
console.log(phrase.split(','));
const region = "hauts-de-france";
console.log(region.split('-'));

console.log("===================");

// decla de tableaux
const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const fruits = ["mangue", "pastèque", "poire", "orange", "ananas", "grenade"];
// acces a un element du tableau
fruits.push("banane"); // ajout en fin de tableau
fruits.unshift("fraise"); // ajout au debut du tableau 
console.log(fruits[0]); // acces au 1ere element
console.log(fruits[3]); // acces au 4eme element 
console.log(fruits[2]); // acces au 3eme element 
console.log(fruits[5]); // acces au 6eme element 
console.log(fruits[4]); // acces au 6eme element 


console.log(fruits.indexOf("orange")); // retourne l’index de l'elem ent orange
console.log(Array.isArray(fruits)); // true

const personne = {
    prenom: "Dalian",
    nom: "Tillier",
    age: 22,
    passions: ["Muscu", "Crypto", "Code"], adresse : {
        rue : "Rue du général Beau gosse",
        ville : "Paradis",
        pays : "Le monde"
    } };

    console.log(personne); // acces aux attributs de l'objet
    console.log(personne.prenom); // acces au prenom
    console.log(personne.passions[0]); // acces au 1er element des pas sions