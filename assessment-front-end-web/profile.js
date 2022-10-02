let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let form = document.getElementById("tellme");

button1.addEventListener("click", () => alert("My favorite color is blue."));
button2.addEventListener("click", () => alert("My favorite place is the couch."));
button3.addEventListener("click", () => alert("My favorite ritual is washing my hands."));
form.addEventListener("submit", () => alert("Thank you for telling me about yourself."));