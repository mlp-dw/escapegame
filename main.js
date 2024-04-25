let x = 0;
let layers = document.querySelectorAll("img.images"); 
let key = document.querySelector(".key"); 

function destinationSlider(){  
   
   if (x == layers.length)
      x=0;
   for (i = 0; i < layers.length; i++) {
    layers[i].style.display = 'none';
   }
   layers[x].style.display = 'block';
   x++;
}

let myInterval = setInterval(destinationSlider, 1000)

function checkAnswer(number){
  if(number === 1 || number === 5 || number ===10){
    stop()
    for (i = number; i < layers.length; i++) {
    layers[i].style.display = 'none';
   }
    key.style.display = "block"
    
    setTimeout(()=>{location.reload()},4000)
  }
}

function stop() {
  clearInterval(myInterval);
}

