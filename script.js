const containerEl = document.getElementById('container');
const num = parseInt(prompt("No of Grids by Grids: "));
for(let i = 0; i< (num * num); i++){
const div = document.createElement('div');
 div.classList.add('panels');
 console.log(num);
 const lb = 470/num;
 div.style.height =  `${lb}px`;
 div.style.width = `${lb}px`;
    containerEl.appendChild(div);
}
    

