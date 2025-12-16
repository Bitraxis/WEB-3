const btnModra = document.getElementById('btn-modra');
const btnZelena = document.getElementById('btn-zelena');
const btnReset = document.getElementById('btn-reset');
let farbaText = document.getElementById('farba-text');

// Z funkciou
function zmenaNaModru(){
	document.body.style.backgroundColor = '#3498db';
	farbaText.textContent = 'modrá';
}

function resetFarbu(){
	document.body.style.backgroundColor = '#ffffff';
	farbaText.textContent = 'biela';
}

btnModra.addEventListener('click', zmenaNaModru);

// Bez funkcie, vlastne spolu zo sebou
btnZelena.addEventListener('click', () => {
	document.body.style.backgroundColor = '#2ecc71';
	farbaText.textContent = 'zelená';
});

btnReset.addEventListener('click', resetFarbu);

