let x = 0;
let layers = document.querySelectorAll("img.images"); 
let key = document.querySelector(".key"); 
let valid_1 = document.querySelector(".France"); 
let valid_2 = document.querySelector(".US"); 
let valid_3 = document.querySelector(".Canada"); 

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
   if (number === 1 || number === 5 || number === 10) {
    for (i = number; i < layers.length; i++) {
      layers[i].style.display = 'none';
    }
    
    switch (number) {
      case 1:
        valid_1.style.display = "block";
        break;
      case 5:
        valid_2.style.display = "block";
        break;
      case 10:
        valid_3.style.display = "block";
        break;
    }
    
    let isValid1 = valid_1.style.display === "block";
    let isValid2 = valid_2.style.display === "block";
    let isValid3 = valid_3.style.display === "block";
    
    if (isValid1 && isValid2 && isValid3) {
      stop();
      key.style.display = "block";
    }
  }
}

function stop() {
  clearInterval(myInterval);
}

