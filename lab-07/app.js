//VALIDAR IBAN

//CASO 1 - ES6600190020961234567890 - 22 DIGITS

const value = 'ES6600190020961234567890';
const pattern1 = /^[A-Z]{2}\d{22}$/;

console.log(pattern1.test(value));


//CASO 2

const values = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
const pattern2 = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/;

values.forEach(value => {
    console.log(pattern2.test(value));
});

//CASO 3

const value3 = 'ES98 2038 5778 98 3000760236';
const pattern3 = /^([A-Z]{2})(\d{2})/;

console.log(pattern3.exec(value3));
console.log(value3.match(pattern3));

/* ====================================================================================*/


//MATRICULA DE COCHE 

//CASO 1

const matriculas = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
const pattern4 = /^\d{4}.?[A-Z]{3}$/;

matriculas.forEach(matricula => {
    console.log(pattern4.test(matricula));
});


//CASO 2

const matriculas2 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
const pattern5 = /^(\d{4}).?([A-Z]{3})$/

matriculas2.forEach(matricula => {
    console.log(pattern5.exec(matricula));
});
