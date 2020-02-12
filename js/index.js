

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
 let img = document.querySelector('img')
 img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.2)";
    img.style.transition = "transform 1s";
})
img.addEventListener('mouseleave', () => {
    img.style.transform = "scale(1)";
})
 
// Create a dblclick eventListener
let changeImg = document.querySelector('img')
changeImg.addEventListener("dblclick", () => {
    changeImg.src = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
})

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





