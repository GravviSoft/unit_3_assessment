console.log("hello world");

let form = document.querySelector('#contact');
let image = document.querySelector(".duckresize")
let googleBox = document.querySelector("#google")
let friendBox = document.querySelector("#friend")
let otherBox = document.querySelector("#other")



function handleSubmit(evt) {
	alert("Form Submitted Successfully");
}

form.addEventListener('submit', handleSubmit);


function imageMessage(evt){
	console.log("hoverrred over")
	alert("Nice hovering skills!  Your mouse finger is limber!")
}

image.addEventListener("mouseover", imageMessage)

