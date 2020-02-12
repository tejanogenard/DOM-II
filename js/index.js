

//Create mouseover eventLisentener for navigation 

let navigationOn = document.querySelector(".nav-link")
    navigationOn.addEventListener('mouseover', () => {
    navigationOn.style.backgroundColor = "teal"
    navigationOn.style.textDecoration = "Underline"
})

let navigationOff = document.querySelector(".nav-link")
navigationOff.addEventListener('mouseout', () => {
    navigationOff.style.backgroundColor = ""
    navigationOff.style.textDecoration = ""
})


// Create mouseenter eventListener
 let img = document.querySelectorAll('img')
 img[1].addEventListener("mouseenter", () => {
    img[1].style.transform = "scale(1.2)";
    img[1].style.transition = "transform 1s";
})
img.addEventListener('mouseleave', () => {
    img.style.transform = "scale(1)";
})
 
// Create a dblclick eventListener
let changeImg = document.querySelector('img')
changeImg.addEventListener("dblclick", () => {
    changeImg.src = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
})

console.log("this is this the img", img)

// Create a click eventListener; changes to color of the subtites
document.querySelectorAll("h2").forEach(el => {
    el.addEventListener("click", () => {
        el.style.color = 'teal';
    })
})

// Create a resize eventListener
window.addEventListener("resize", () => {
    img.src = "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
})


// Create nested click eventListener
let body = document.querySelector('body')
body.addEventListener('click', () => {
    body.style.backgroundColor = "teal"
})

let buttonGroup = document.querySelector(".btn")
buttonGroup.addEventListener('click', (event) => {
    buttonGroup.style.color = "red";
    event.stopPropagation();
})

let box = document.querySelector('img')

box.addEventListener('dragstart', dragStart);
// box.addEventListener('dragend', dragEnd);

function dragStart(){
    console.log('start')
    this.className += 'hold';
    this.className = 'invisible';
}
