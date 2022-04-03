const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
];


//EJERCICIO 1: Listar todos los productos.

const print = (product) => {
    for (property in product) {
        console.log(property + ":" + product[property])
    }
};

for (i = 0; i <= carrito.length; i++) {
    print(carrito[i]);
};


// EJERCICIO 2: Eliminar el producto con id 54657 del carrito de la compra.

// let index;

// for (i = 0; i < carrito.length; i++) {
//     if (carrito[i].id === 54657) {
//         index = i;
//     };
// };

// carrito.splice(index, 1);

// console.log(carrito);



// EJERCICIO 3: Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).


// let total = 0;

// for (product of carrito) {
//     total += (product.price * product.count);
// };
// console.log(total);


//EJERCICIO 4:  Filtrar por los productos que sean prime.

// let primeProducts = [];

// for (i = 0; i < carrito.length; i++) {
//     if (carrito[i].premium) primeProducts.push(carrito[i]);
// };

// console.log(primeProducts);





/*---------------OPCIONAL----------------- */

//Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".

let premium;
for (product of carrito) {
    if (product.premium === false) {
        premium = false;
    }
}

if (product.premium === true) {
    console.log("Pedido sin gastos de envío");
} else {
    console.log("Este pedido tiene gastos de envío");
};


// Mostrar el carrito en un listado de html básico.

for (product of carrito) {
    document.write("<ul>");
    document.write("<li>" + product.name + ", price: " + "€" + product.price + "</li>");
    document.write("</ul>");
};


// Aplicar un descuento del 5% si la compra es mayor de 100 €

let total = 0;

for (product of carrito) {
    total += (product.price * product.count);
};

if (total > 100) {
    total = total - (total * 0.05);
};

console.log(total);