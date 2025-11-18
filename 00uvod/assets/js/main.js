console.log("Ahoj, svet!");

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const btnBg = document.getElementById("btn-bg");
let ogFarba = true;
if (btn && text) {
		btn.addEventListener("click", () => {
			 text.textContent = "Klikol si na tlačítko";
		});
}

if (btnBg) {
		btnBg.addEventListener("click", () => {
			 if (ogFarba) {
				  document.body.classList.toggle("alt-bg");
}

