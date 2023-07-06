const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener('click', function (event) {
	event.preventDefault()
	const firstNameValue = firstNameInput.value
	const lastNameValue = lastNameInput.value
	nameValidaton(firstNameValue, lastNameValue)
})

function nameValidaton (fname, lname) {
	if (fname == "" || lname = "") {
		alert ("First name / last name empty")
	} else {
		updateUI(fname, lname)
	}
}

function updateUI(fname, lname) {
	const var firstNameOutput = document.getElementById("firstNameOutput");
	const var lastNameOutput = document.getElementById("lastNameOutput");
	firstNameInput.textContent = fname
	lastNameOutput.textContent = lname
}

var slideIndex = 1
setInterval(function() {
	plusDiv(1)
}, 1500)

function plusDiv (index) {
	showImage(slideIndex+=index)
}

function showImage (index) {
	console.log (index)
	const imgList = document.getElementByClassName('slider')
	if (index > imgList.Length) {slideIndex = 1}
	if (index < 1 ) {slideIndex=imgList.Length}
	for (i = 0; i < imgList.Length; i++ {
		imgList[i].style.display = "none"
		}
	imgList[slideIndex - 1].style.display = "block"
}