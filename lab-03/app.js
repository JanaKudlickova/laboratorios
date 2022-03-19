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


//EXERCISE 2: Calcular sueldo neto
const empleado = {
    bruto: 26000,
    hijos: 0,
    pagas: 12
}

let retencion;

if (empleado.bruto <= 12000) {
    retencion = 0;
} else if (empleado.bruto > 12000 && empleado.bruto <= 24000 && empleado.hijos == 0) {
    retencion = empleado.bruto * 0.08;
} else if (empleado.bruto > 12000 && empleado.bruto <= 24000 && empleado.hijos > 0) {
    retencion = empleado.bruto * 0.06;
} else if (empleado.bruto > 24000 && empleado.bruto <= 34000 && empleado.hijos == 0) {
    retencion = empleado.bruto * 0.16;
} else if (empleado.bruto > 24000 && empleado.bruto <= 34000 && empleado.hijos > 0) {
    retencion = empleado.bruto * 0.14;
} else if (empleado.bruto > 34000 && empleado.hijos == 0) {
    retencion = empleado.bruto * 0.3;
} else if (empleado.bruto > 34000 && empleado.hijos > 0) {
    retencion = empleado.bruto * 0.28;
};

console.log(retencion);

//Salario neto divido en 14 o 12 pagas
let salarioNeto;

if (empleado.pagas === 14) {
    salarioNeto = (empleado.bruto - retencion) / 14;
} else {
    salarioNeto = (empleado.bruto - retencion) / 12;
}

console.log(salarioNeto);