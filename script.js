// Main container or canvas
const containerEl = document.getElementById('container');
const rainbowEl = document.getElementById('rainbow');
//Random Color function
function getRandomColor(){
  var x = Math.floor(Math.random() * 256)+1;
  var y = Math.floor(Math.random() * 256)+1;
  var z = Math.floor(Math.random() * 256)+1;
  return `rgb(${x},${y},${z})`
}
// Input from user to set resolution of no of grids
num = 16;



for(let i = 0; i< (num * num); i++){
  const div = document.createElement('div');
   div.classList.add('panels');
   const lb = 470/num;
   div.style.height =  `${lb}px`;
   div.style.width = `${lb}px`;
  
   containerEl.appendChild(div);
   div.addEventListener('hover', ()=>{
      div.style.backgroundColor = "black";
    });
  }

function changeGrids(){
  console.log(rainbowEl.checked);
  containerEl.innerHTML = "";
    const num = parseInt(prompt("No of Grids by Grids: "));
    // loop for adding divs
if(num < 100 && num > 0){
for(let i = 0; i< (num * num); i++){
const div = document.createElement('div');
 div.classList.add('panels');
 const lb = 470/num;
 div.style.height =  `${lb}px`;
 div.style.width = `${lb}px`;

 containerEl.appendChild(div);
 div.addEventListener('hover', ()=>{
  if(rainbowEl.checked){
    div.style.backgroundColor = getRandomColor();
  }
  else{
    div.style.backgroundColor = "black";
  }
  });
}
}
else{
  alert("Plz put valid input b/w 1 to 100");
}
}

