// Exercice 1: ajoute "Ted" au tableau suivant

let castArray = ['Robin', 'Barney', 'Lily', 'Marshal', 'Ted'];
console.log(castArray);
// Exercice 2: Affiche l'index de "Ted" dans le tableau dans la console
console.log(castArray[4]);
// Exercice 3: Affiche l'index de Robin dans le tableau dans la console
console.log(castArray[0]);
// Exercice 4: retire "Robin" du tableau
console.log(castArray.shift());
// Exercice 5: retire "Ted" du tableau
console.log(castArray.pop());
console.log(castArray);
// Exercice 6: ajoute "Ted" et "Robin" au tableau
console.log(castArray.push('Ted', 'Robin'));
console.log(castArray);
// Exercice 7: Affiche le nouvel index de Ted et Robin dans le tableau dans la console
let index3 = castArray.findIndex(element => element === 'Ted');
let index4 = castArray.findIndex(element => element === 'Robin');
console.log(index3, index4);
// Exercice 8: à l'aide d'une boucle, affiche chaque élément du tableau dans la console

// Exercice 9: à l'aide de la méthode .findIndex(), trouve l'index de Lily, ensuite, affiche Lily dans la console

// Exercice 10: à l'aide d'une boucle, multiplie par 2 chaque élément du tableau suivant, crée un nouveau tableau à l'aide de la méthode .push(), affiche le nouveau tableau dans la console

let multiplicationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
