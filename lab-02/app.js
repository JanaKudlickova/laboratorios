//SOLUTION FOR 1 HOTEL
/*
const hotel = {
    name: "Paradise",
    location: "Mykonos",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
};

document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;
document.getElementById("hotel-location").innerHTML = "Ubicado en " + hotel.location;
document.getElementById("hotel-image").src = hotel.image;

const rating = prompt("Puntuación: del 1 al 5");
document.getElementById("rating").innerHTML = rating + " estrellas";

const anonymousReview = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous-review").checked = anonymousReview;
*/


//SOLUTION FOR SEVERAL HOTELS

const hoteles = {
    Paradise: {
        name: "Paradise",
        location: "Mykonos",
        image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    },
    "Holiday Bay": {
        name: "Holiday Bay",
        location: "Malta",
        image: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    },
};

const selectedHotel = prompt("Indique hotel sobre el que quiere hacer la reseña: Paradise o Holiday Bay")

document.getElementById("hotel-name").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("hotel-location").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("hotel-image").src = hoteles[selectedHotel].image;

const stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

const rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
document.getElementById("rating").innerHTML = stars[rating];

const anonymousReview = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous-review").checked = anonymousReview;