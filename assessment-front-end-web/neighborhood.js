let button = document.getElementById("restaurants");
function restaurantMe(evt){
    let arr = ["The Beehive", "Wink and Nod", "Picco"];
    restaurant = arr[Math.floor(Math.random()*arr.length)]
    alert(`Try out ${restaurant}`);
}

button.addEventListener("click", restaurantMe);