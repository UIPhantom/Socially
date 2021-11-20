// const input = document.getElementsByTagName("input");
// input[0].addEventListener("click" , () => {
//     input[0].style.transition = "border 5s"
//     input[0].style.borderWidth = "";    
// });
const inputs = document.querySelectorAll('.form-signin input');
const labels = document.querySelectorAll('.form-signin label');

labels.forEach(label => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`)
		.join('');
});

function firstStart(){
	const main = document.getElementsByTagName("main");
	const head = document.getElementById("head");
	const foot = document.getElementById("footer");
	const input = document.getElementsByTagName("input");
	const btn = document.getElementsByTagName("button");
	const label = document.getElementsByTagName("label");
	label[0].style.display = "block";
	label[1].style.display = "block";
	btn[0].style.visibility = "visible";
	btn[1].style.visibility = "visible";
	input[0].type = "email";
	input[1].type = "password";
	foot.classList.add("footer");
	head.classList.add("header");
	main[0].classList.add("main");
}