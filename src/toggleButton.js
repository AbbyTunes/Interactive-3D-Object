
var button = document.getElementById("button");
var panel = document.getElementById("panel");
var close = document.getElementById("close-button");

button.addEventListener("click", () => {
	toggleButton();
})

close.addEventListener("click", () => {
	toggleButton();
})

export default function toggleButton() {
	if (button.style.display === "none") {
		button.style.display = "block";
		panel.style.display = "none";
	} else {
		button.style.display = "none";
		panel.style.display = "block";
	}
}