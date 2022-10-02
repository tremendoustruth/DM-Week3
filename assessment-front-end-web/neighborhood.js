let button = document.getElementById("restaurants");
let restauraunts = ["The Beehive", "Wink and Nod", "Picco"];
button.addEventListener("click", restaurantMe(restauraunts));
function restaurantMe(arr){
    restaurant = arr[Math.floor(Math.random()*arr.length)]
    alert(`Try out ${restaurant}`);
}
