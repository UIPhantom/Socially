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