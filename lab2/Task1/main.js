
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

   

  
    var lingrad = context.createLinearGradient(0, 0, 0, 500);
    lingrad.addColorStop(0, "#00ABEB");
    lingrad.addColorStop(0.5, "#fff");
    lingrad.addColorStop(0.5, "#26C000");
    lingrad.addColorStop(1, "#fff");

    var lingrad2 = context.createLinearGradient(0, 500 * 0.5, 0, 500 * 0.6);
    lingrad2.addColorStop(1, "#000");
    lingrad2.addColorStop(1, "rgb(0 0 0 / 0%)");

    
    context.fillStyle = lingrad;
    context.strokeStyle = lingrad2;

   
    context.fillRect(0, 0, 500, 500);
    context.strokeRect(500* 0.3, 500* 0.3, 500 * 0.4, 500 * 0.4);


