const getNumber1 = () => document.getElementById("number1").value;
const getNumber2 = () => document.getElementById("number2").value;


const sum = () => parseInt(getNumber1()) + parseInt(getNumber2());
const subtract = () => parseInt(getNumber1()) - parseInt(getNumber2());
const multiply = () => parseInt(getNumber1()) * parseInt(getNumber2());
const divide = () => parseInt(getNumber1()) / parseInt(getNumber2());

const submitSum = () => {
    document.getElementById("result").innerText = sum();
};
const submitSubtract = () => {
    document.getElementById("result").innerText = subtract();
};
const submitMultiply = () => {
    document.getElementById("result").innerText = multiply();
};
const submitDivide = () => {
    document.getElementById("result").innerText = divide();
};

//If one of the inputs is empty - display error
const errorMessage = "Invalid input. Please enter a number in both inputs."

const validSumResult = () => {
    if (getNumber1() == "" || getNumber2() == "") {
        document.getElementById("result").innerText = errorMessage;
    } else {
        submitSum();
    };
};

const validSubtractResult = () => {
    if (getNumber1() == "" || getNumber2() == "") {
        document.getElementById("result").innerText = errorMessage;
    } else {
        submitSubtract();
    };
};

const validMultiplyResult = () => {
    if (getNumber1() == "" || getNumber2() == "") {
        document.getElementById("result").innerText = errorMessage;
    } else {
        submitMultiply();
    };
};

const validDivideResult = () => {
    if (getNumber1() == "" || getNumber2() == "") {
        document.getElementById("result").innerText = errorMessage;
    } else {
        submitDivide();
    };
};


document.getElementById("add-button").addEventListener("click", validSumResult);
document.getElementById("subtract-button").addEventListener("click", validSubtractResult);
document.getElementById("multiply-button").addEventListener("click", validMultiplyResult);
document.getElementById("divide-button").addEventListener("click", validDivideResult);