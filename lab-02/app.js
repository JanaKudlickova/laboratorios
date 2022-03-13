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