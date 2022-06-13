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


/*=========================================EXTRA: HOTEL RESERVATIONS==========================================*/

//Get price according to the room category; extra 20 for spa

const roomCategory = () => document.getElementById("room-category").value;
const spa = () => document.getElementById("spa-selected").checked;
 
const categoryCost = () => {
    const extraSpa = spa() === true ? 20 : 0;
    if (roomCategory() === "standard") {
        return 100 + extraSpa;
    } else if ( roomCategory() === "junior") {
        return 120 + extraSpa;
    } else {
        return 150 + extraSpa;
    }
}

//Cost increased or decreased by the type of the room
const roomType = () => document.getElementById("room-type").value;

const roomTypeCost = () => {
    if (roomType() === "individual") {
        return categoryCost() * 0.75; 
    } else if (roomType() === "triple") {
        return categoryCost() * 1.25;
    } else {
        return categoryCost();
    }
}

//Multiply cost by number of nights
const stayDuration = () => document.getElementById("nights-number").value;
const costWithoutParking = () => parseInt(stayDuration()) * roomTypeCost();


//Parking 10 euros per night
const getParkingNights = () => document.getElementById("parking-nights").value;
const parkingCost = () => parseInt(getParkingNights()) * 10;

const totalCost = () => costWithoutParking() + parkingCost();



const submitResult = () => {
    document.getElementById("final-cost").innerHTML = totalCost();
};

document.getElementById("calculate").addEventListener("click", submitResult);
