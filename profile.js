
let color = document.querySelector("#color")
let place = document.querySelector("#place")
let ritual = document.querySelector("#ritual")


function getColor(event){
    alert("Black and Silver - Raiders Colors")
}

function getPlace(event){
    alert("The Beach")
}

function getRitual(event){
    alert("Reading and Working Out Daily")
}


color.addEventListener("click", getColor)

place.addEventListener("click", getPlace)

ritual.addEventListener("click", getRitual)
