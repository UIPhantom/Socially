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

function firstStart() {
	const main = document.getElementsByTagName("main");
	const input = document.getElementsByTagName("input");
	const btn = document.getElementsByTagName("button");
	const label = document.getElementsByTagName("label");
	const sign_back = document.getElementById("signup-back");

	for (let index = 0; index < label.length; index++) {
		label[index].style.display = "block";
	}

	for (let index = 0; index < btn.length; index++) {
		btn[index].style.visibility = "visible";
	}
	input[0].type = "email";
	input[1].type = "password";
	sign_back.style.visibility = "visible";
	main[0].classList.add("main");
}