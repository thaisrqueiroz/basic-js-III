//# 🎠 Ejercicios básicos en Javascript parte III

//## Números:

//1. Escribe una función que tome dos números como argumentos y devuelva su suma.

function numberSum(number1, number2) {
    return number1 + number2;
};
console.log(numberSum(4, 4));

//2. Escribe una función que tome dos números como argumentos y devuelva su resta.

function numberSubtraction(number1, number2) {
    return number1 - number2;
};
console.log(numberSubtraction(8, 4));

//3. Escribe una función que tome dos números como argumentos y devuelva su producto.

function numberMultiplication(number1, number2) {
    return number1 * number2;
};
console.log(numberMultiplication(9, 5));

//4. Escribe una función que tome dos números como argumentos y devuelva su división.

function numberDivision(number1, number2) {
    return number1 / number2;
};
console.log(numberDivision(24, 4));

//5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

function numberPower(numberBase, numberExponent){
    return Math.pow(numberBase, numberExponent);
};
console.log(numberPower(4, 5));

//6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.

function numberRest(number1, number2){
    return number1 % number2;
};
console.log(numberRest(10, 3));

//7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.

function squareRoot(number1){
    return Math.sqrt (number1);
};
console.log(squareRoot(9));

//8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function numberAbsolute(number1){
    return Math.abs(number1);
};
console.log(numberAbsolute(-6));

//9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function numberRound(number1){
    return Math.round(number1);
};
console.log(numberRound(3.78));

//10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.

function numberRandom(){
    return Math.random();
};
console.log(numberRandom());

//## Letras:

//1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

function letterConcatenation(string1, string2){
    return string1 + " " + string2;
};
console.log(letterConcatenation("Hello, ", "teacher!"));

//2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function letterLength(string1){
    return string1.length;
};
console.log(letterLength("How are you?"));

//3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function letterUppercase(string1){
    return string1.toUpperCase();
};
console.log(letterUppercase("I hope this message finds you well."));

//4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

function letterLowercase(string1){
    return string1.toLowerCase();
};
console.log (letterLowercase("How was your WEEKEND?"))

//5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

function letterPosition(string1, indexPosition){
    return string1.charAt(indexPosition);
};
console.log(letterPosition("I hope you have a great Week!", 9));

//6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function letterInvert(string1){
    return string1.split('').reverse().join('');
};
console.log(letterInvert("Thank you for the patience."))

//7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function letterCharacterCount (string1, character){
    let count = 0;
    for (let i=0; i < string1.length; i++){
        if (string1[i] === character){
            count++;
        }
    }
    return count;
};
console.log(letterCharacterCount("Thank you for imparting knowledge and skills", "o"));

//8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

function letterBlankSpaces (string1){
    return string1.replace(/\s+/g, "");
};
console.log(letterBlankSpaces("Thank you for teach us so many things."));

//9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

function letterPalindrome(string1){
    string1 = string1.replace(/\s+/g, "").toLowerCase();
    return string1 == string1.split('').reverse().join('');
};
console.log(letterPalindrome("Ready for today’s lesson!"));
console.log(letterPalindrome("Step on no pets"));

//10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function letterTitleCase(string1){
    return string1
        .split(' ')
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase()
        )
        .join(' ');
};
console.log(letterTitleCase("best regArds"));

//## Arrays:

//1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

function arraySum(numbers){
    let sum = 0;
    for (let index = 0; index < numbers.length; index++){
        sum += numbers[index];
    }
    return sum;
};
console.log(arraySum([3, 6, 9, 12]));

//2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function arrayAverage(numbers){
    let sum = 0;
    for (let index = 0; index < numbers.length; index++){
        sum += numbers[index];
    }
        return sum / numbers.length;
};
console.log(arrayAverage([3, 6, 9, 12]));

//3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

function arrayOrdered(numbers){
    return numbers.sort((number1, number2) => number1 - number2);
};
console.log(arrayOrdered([24, 16, 4, 8, 20, 12]));

//4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function arrayGreaterthan(array, number1){
    let largerthan = [];
    for (let index = 0; index < array.length; index++){
        if (array[index] > number1){
            largerthan.push(array[index]);
        }
}
return largerthan;
};
console.log(arrayGreaterthan([3, 6, 9, 12, 15, 18, 21], 13))

//5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function arrayUnite(array1, array2){
    return array1.concat(array2);
};
console.log(arrayUnite([4, 8, 12, 16], [5, 10, 15, 20]));

//6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

function arrayMaximum(array){
    let greaternumber = array[0];
    for (let index = 0; index < array.length; index++){
        if (array[index] > greaternumber){
            greaternumber = array[index];
        }
    }
    return greaternumber;
};
console.log(arrayMaximum([2, 4, 6, 16, 14, 12]));

//7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function arrayMinimum(array){
    let lessnumber = array[0];
    for (let index = 0; index < array.length; index++){
        if (array[index] < lessnumber){
            lessnumber = array[index];
        }
    }
    return lessnumber;
};
console.log(arrayMinimum([16, 14, 2, 4, 6, 12]));

//8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function arrayRepeated(array, number1){
    let repeated = 0;
    for (let index = 0; index < array.length; index++){
        if (array[index] === number1){
            repeated++;
        } 
}
return repeated;
};
console.log(arrayRepeated([10, 15, 20, 25, 30], 20));

//9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function arrayWithoutDuplicate(array){
    let unique = [];
    for (let index = 0; index < array.length; index++){
        if(!unique.includes(array[index])){
            unique.push(array[index]);
        }
    }
    return unique;
};
console.log(arrayWithoutDuplicate([2, 4, 6, 4, 8, 10, 4, 12, 2, 14]));

//10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

function arrayInverse(array){
    return array.reverse();
};
console.log(arrayInverse([2, 4, 6, 8, 10, 12, 14, 16, 18]));

//## Objetos literales:

//1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

function objectName(object){
    return object.nombre;
};
console.log(objectName({nombre: "Thais", nacionalidad: "Brasileña"}));

//2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function objectNewAge(object, age){
    object.edad = age;
    return object;
};
console.log(objectNewAge({nombre: "Thais", nacionalidad: "Brasileña", edad: 30}, 31));

//3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

function objectNewAttribute(object, location){
    object[location] = null;
    return object;
};
console.log(objectNewAttribute({nombre: "Thais", nacionalidad: "Brasileña", edad: 31}, "ubicacion"));

//4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

function objectDeleteAttribute(object, location){
    delete object[location];
    return object;
};
console.log(objectDeleteAttribute({nombre: "Thais", nacionalidad: "Brasileña", edad: 31, ubicacion: "Valencia"}, "ubicacion"))

//5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function objectAttributeCount(object1){
    return Object.keys(object1).length;
};
console.log(objectAttributeCount({nombre: "Thais", nacionalidad: "Brasileña", edad: 31, ubicacion: "Valencia"}));

//6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

function objectAttributeCheck(object1, attribute1){
    return object1.hasOwnProperty(attribute1);
};
const person1 = {
    nombre: "Thais",
    edad: 31,
    ubicacion: "Valencia"
};
const person2 = {
    nombre: "Priscila",
    edad: 34,
    ubicacion: "Dublin"
};
console.log(objectAttributeCheck(person1, "nombre"));
console.log(objectAttributeCheck(person2, "nacionalidad"));

//7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

function objectAllValue(object1){
    return Object.values(object1);
};
const person3 = {
    nombre: "Patricia",
    edad: 27,
    nacionalidad: "Brasileña"
};
console.log(objectAllValue(person3));

//8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.

const person4 = {
    nombre: "Thais",
    edad: 31,
    ubicacion: "Valencia"
};
function objectComparison(obj1, obj2){
    const characteristic1 = Object.keys(obj1);
    const characteristic2 = Object.keys(obj2);
    if (characteristic1.length !== characteristic2.length){
       return false; 
    }
    for (let characteric of characteristic1){
        if (!obj2.hasOwnProperty(characteric) || obj1[characteric] !== obj2[characteric]){
            return false;
        }
    }
    return true;
};
console.log(objectComparison(person2, person3));
console.log(objectComparison(person1, person4));

//9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

function objectCopy(obj1){
    return {...obj1};
};
const copy = objectCopy(person1);
console.log(copy);

//10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.

function objectNew (object2, object3){
    return {...object2, ...object3}
}
const object2 = {
    nombre: "Thais",
    apellido: "Rocha",
    ciudad: "Valencia"
};
const object3 = {
    nombre: "Thais",
    edad: 31,
    ciudad: "Xirivella"
};
console.log(objectNew(object2, object3));