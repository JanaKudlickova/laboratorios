/* 
hasId
Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una
propiedad llamada id (debe devolver booleano true / false ).
*/

const hasId = ({...item}) => item.hasOwnProperty('id');

const car = {id: 001, type:"Fiat", model:"500", color:"blue"};
const mobile = {id: 002, model:"iPhone 13", color:"black"};
const dress = {type:"formal", size:"S", color:"green"};

console.log(hasId(car));
console.log(hasId(mobile));
console.log(hasId(dress));


/* 
Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
*/

const head = ([first, ...rest]) => first;

console.log(head(["apple", "banana", "orange", "peach"]));


/*
tail
Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los
elementos menos el primero.
*/

const vegetables = ["carrot", "lettuce", "potato", "radish"];

const tail = ([, ...rest]) => rest;

console.log(tail(vegetables));

/*
swapFirstToLast
Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el
primer elemento ha sido colocado en la última posición.
*/

const veggies = ["carrot", "lettuce", "potato", "radish"];

const swapFirstToLast = ([first, ...rest]) => [...rest, first];
  
console.log(swapFirstToLast(veggies));
  

/*excludeId
Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto
la propiedad id si la hubiera.
*/

const user = {
    id: 123,
    name: "John",
    surname: "Doe",
    age: 25
  };
  
  
  const excludeId = ({id, ...rest}) => rest;
  
  console.log(excludeId(user));

/*
wordsStartingWithA
Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array
filtrado con aquellas palabras que empiecen por a.
*/

const words = ["apple", "book","ant", "car", "ankle"];

const wordsStartingWithA = words.filter((word) => word.startsWith("a"));

console.log(wordsStartingWithA);

/*
concat
Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la
concatenación de todos, separados por | .
*/

const items = ["apple", "book","ant", "car", "ankle"];

const concat = arr => arr.join("|");

console.log(concat(items));

/*
multArray
Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un número
( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
TIP: No utilices bucles.
*/

const nums = [1, 3, 6, 11];

const multArray = (arr, x) => arr.map(item => item * x);

console.log(multArray(nums, 5));

/*
calcMult
Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el
producto de todos ellos.
*/

const nums2 = [5, 2, 20, 350];

const calcMult = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(calcMult(nums2));


/*-----------------------EXTRA EXERCISES--------------------------*/

/*
swapFirstSecond
Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido
intercambiado por el segundo.
TIP: No modifiques el array de entrada original.
*/

const cars = ["Fiat", "BMW", "Kia", "Volvo", "Toyota", "Tesla"];

const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];

console.log(swapFirstSecond(cars));

/*
longest
Implementa una función longest tal que admita multiples strings como argumento de entrada así como un carácter
cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).
*/

const words1 = ["banana", "book", "bee", "breakfast", "bench"];
const words2 = ["bank", "ant", "car", "branch"];

const longest = (items, letter) => items.every((item) => item.startsWith(letter));

console.log(longest(words1, "b"));
console.log(longest(words2, "b"));


/*
searchInStringV1
Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva
cuantas veces aparece dicho carácter en el string.
TIP: No utilices bucles.
TIP: Convierte el string a un array mediante Array.from() .
*/

const str = "bubble";
const arr = Array.from(str);

console.log(arr);

const searchInStringV1 = (arr, letter) => 
  arr.reduce((acc, value) => {
    if (value === letter) acc++;
    return acc;
    }, 0);

console.log(searchInStringV1(arr, "b"));

/*
searchInStringV2
Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin usar
reduce .
TIP: No utilices bucles.
TIP: Convierte el string a un array mediante Array.from() .
*/

const searchInStringV2 = (arr, letter) => 
  arr.filter(value => {
    if(value === letter) {
      return value
    }
  }).length;

console.log(searchInStringV2(arr, "b"));

/*
sortCharacters
Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas
alfabéticamente.
TIP: No utilices bucles. No modifiques el string original de entrada.
TIP: Convierte el string a un array mediante Array.from() .
*/

const str2 = "window";

const sortCharacters = str => {
  const arr = Array.from(str);
  return arr.sort();
}

console.log(sortCharacters(str2));

/*
shout
Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
TIP: No utilices bucles.
*/

const elements = ["hello", "hi","hola", "ahoj", "bonjour"];

const shout = arr => arr.map(item => item.toUpperCase()).join("!");

console.log(shout(elements));


/*---------------------------------------------------------------------------------*/

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
    ];


//A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

const addTax = products =>
  products.map(product => ({ ...product, IVA: product.price * 0.21 }))

console.log(addTax(shoppingCart));    


//B. Ordena la lista de más a menos unidades.

const sortByUnits = products => products.sort((a, b) => b.units - a.units);

console.log(sortByUnits(shoppingCart));


//C. Obtén el subtotal gastado en droguería.

const getSubtotal = products =>
  products
    .filter(product => product.category === "Droguería")
    .reduce((subtotal, product) => subtotal + product.price * product.units, 0);

console.log(getSubtotal(shoppingCart));


//D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

const f = products =>
  products
  .map(product => ({ product: product.product, totalPrice: "€" + product.price * product.units }))
  .sort() //no se como ordenarlo
  

console.log(f(shoppingCart));