/*Script*/

const colors = ["green", "red", "#ff7f00", "#ff7fbe", "#a5bc8c"];

var btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {

    const randomNumber = Math.floor(Math.random() * colors.length);

    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];

    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.random();
}