var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var article = document.querySelector(".article");

function updateColor() {
    article.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

addEventListener("load",updateColor)
