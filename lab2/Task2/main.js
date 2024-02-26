const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 200;
const lineWidth = 10;
const strokeColor = "#007bff";


const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
gradient.addColorStop(0, "#007bff"); 




context.beginPath();
context.arc(centerX, centerY, radius/0.75, 0, Math.PI * 2); 
context.lineWidth = 0;
context.strokeStyle = "#007bff";
context.fillStyle=gradient;
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.arc(centerX, centerY, radius, 0, Math.PI * 2);
context.lineWidth = lineWidth;
context.strokeStyle = "#104c92";
context.fillStyle="#104c92";
context.fill();
context.stroke();
context.closePath();

// Draw letter N
const letterN = "N";
const fontSize = 350;
context.font = `${fontSize}px Arial`;
context.fillStyle = "#fff"; 
context.textAlign = "center";
context.textBaseline = "middle";
context.fillText(letterN, centerX, centerY);