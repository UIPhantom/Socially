const inputs = document.querySelectorAll('.form-signup input');
const labels = document.querySelectorAll('.form-signup label');

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
	foot.classList.add("footer");
	head.classList.add("header");
	label[0].style.display = "block";
	label[1].style.display = "block";
	btn[0].style.visibility = "visible";
	input[0].type = "email";
	input[1].type = "password";
	main[0].classList.add("main");
}