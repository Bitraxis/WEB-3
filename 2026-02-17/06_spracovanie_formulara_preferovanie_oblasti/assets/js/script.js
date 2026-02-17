const form = document.getElementById('newsletterForm');
form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
	event.preventDefault();
	const menoInput = document.getElementById('meno');
	const meno = menoInput.value;
	console.log(meno);
	const emailInput = document.getElementById('email');
	const email = emailInput.value;
	console.log(email);

	const vsetkyCheckboxy = document.querySelectorAll('input[type="checkbox"]');

	const poleCheckboxov = Array.from(vsetkyCheckboxy);
	console.log(vsetkyCheckboxy);
}
