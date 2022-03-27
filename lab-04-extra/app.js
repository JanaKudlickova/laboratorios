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


//Optional - show results as the user make changes in the inputs without using the button
// const submitResult = () => {
//     document.getElementById("final-cost").innerHTML = categoryCost();
//     document.getElementById("final-cost").innerHTML = roomTypeCost();
//     document.getElementById("final-cost").innerHTML = costWithoutParking();
//     document.getElementById("final-cost").innerHTML = totalCost();
// };

// document.getElementById("room-category").addEventListener("keyup", submitResult);
// document.getElementById("spa-selected").addEventListener("keyup", submitResult);
// document.getElementById("room-type").addEventListener("keyup", submitResult);
// document.getElementById("nights-number").addEventListener("keyup", submitResult);
// document.getElementById("parking-nights").addEventListener("keyup", submitResult);



