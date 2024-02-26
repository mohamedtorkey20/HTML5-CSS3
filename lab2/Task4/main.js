const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const containerWidth = canvas.width;
const containerHeight = canvas.height;
let position = 0;

function animateLine() {
    context.clearRect(0, 0, containerWidth, containerHeight);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(position , position);
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.stroke();
    context.closePath();
    position++;
    if (position > containerWidth/2) {
        clearInterval(animationInterval);
        alert("Animation ended!"); 
    }
}

const animationInterval = setInterval(animateLine, 10); 