//EJERCICIO 1: Calcular precio de carrito

const product = { count: 3, price: 12.55, type: "ropa" };
let total;

if (product.count <= 0) {
    total = 0; 
} else {
    total = product.count * product.price
}


let IVA;
switch(product.type) {
    case "alimentacion": 
        IVA = total * 0.1;
        break;
    case "libro": 
        IVA = total * 0.4; 
        break;
    default: 
        IVA = total * 0.21;; 
        break;
   }

let precioDelCarito = total + IVA;
   
console.log(precioDelCarito);