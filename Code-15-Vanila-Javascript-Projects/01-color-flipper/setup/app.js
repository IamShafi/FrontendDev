const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
 
const hexbtn = document.getElementById("hexbtn");
hexbtn.addEveneListener('click', function(){
    let hexColor = '#';
    let RN = getRandomNumber();
    for(let i=0; i<6; i++){
        hexColor += hex[RN];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})