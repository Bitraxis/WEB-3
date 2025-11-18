console.log("Ahoj, svet!");

const btn = document.getElementById("btn");
const text = document.getElementById("text");

if (btn) {
		btn.addEventListener("click", () => {
			 text.textContent = "Klikol si na tlačítko";
		});
}
