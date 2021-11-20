const labels = document.querySelectorAll('.form-signup label');

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
	const head = document.getElementById("head");
	const foot = document.getElementById("footer");
	const input = document.getElementsByTagName("input");
	const btn = document.getElementsByTagName("button");
	const label = document.getElementsByTagName("label");
	const select = document.getElementById("select-gender");
	foot.classList.add("footer");
	head.classList.add("header");

	for (let index = 0; index < label.length - 1; index++) {
		label[index].style.display = "block";
	}

	for (let index = 0; index < btn.length; index++) {
		btn[index].style.visibility = "visible";
	}

	input[0].type = "email";
	input[1].type = "password";
	input[2].type = "text";
	input[3].type = "text";
	select.style.display = "block";
	main[0].classList.add("main");
}