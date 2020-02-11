

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


// Create mouseover eventListener
 let img = document.getElementsByTagName('img')
 console.log(img)


//Create dblclick eventLisentener

// let changeImg = document.querySelector('.bus in the sand')
// changeImg.addEventListener('dblclick', () => {
//     changeImg.src = ""
// })



