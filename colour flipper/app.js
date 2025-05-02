const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];   
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");
    const currentLocation = window.location.href;

    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});