const croix = document.querySelector("#croix");
const rond = document.querySelector("#rond");
const Form = document.querySelector("#choose");

const $cpu = document.querySelector("#cpu");
const $jcj = document.querySelector("#jcj");
const $alt = document.querySelector("#alt");
const dialog1 = document.querySelector("#first");
document.addEventListener("DOMContentLoaded", () => {
	dialog1.showModal();
});
rond.classList.add("white-background");
rond.classList.add("blue-text");
croix.classList.add("black-background");
croix.classList.add("silver-text");
Form.addEventListener("submit", (e) => {
	e.preventDefault();
	dialog1.close();
});
croix.addEventListener("click", () => {
	croix.classList.remove("black-background");
	croix.classList.remove("silver-text");
	rond.classList.remove("white-background");
	rond.classList.remove("blue-text");
	croix.classList.add("white-background");
	croix.classList.add("blue-text");
	rond.classList.add("black-background");
	rond.classList.add("silver-text");
	$alt.textContent = "X";
});
rond.addEventListener("click", () => {
	rond.classList.remove("black-background");
	rond.classList.remove("silver-text");
	croix.classList.remove("white-background");
	croix.classList.remove("silver-text");
	rond.classList.add("white-background");
	rond.classList.add("blue-text");
	croix.classList.add("black-background");
	croix.classList.add("silver-text");
	$alt.textContent = "O";
});

$cpu.addEventListener("click", () => {
	dialog1.style.display = "none";
});

$jcj.addEventListener("click", () => {
	dialog1.style.display = "none";
});
