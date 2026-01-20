let btnAccept = document.getElementById('btnAccept');
const out = document.getElementById('out');
const hmotnostInput = document.getElementById('hmotnost');
const vyskaInput = document.getElementById('vyska');

function calculateBMI() {
    const hmotnost = document.getElementById('hmotnost').value;
    const vyska = document.getElementById('vyska').value;
    const BMI = Math.round((hmotnost / (vyska*vyska))*100000) / 10;
    let matext = false;
    console.log(BMI);
    if (BMI < 18.5) {
        let odpoved = " = Podvyživený ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
        matext = true;
    } else if ( BMI >= 18.5 && BMI < 25) {
        let odpoved = " = Ideálny ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
        matext = true;
    } else if (BMI >= 25 && BMI < 30) {
        let odpoved = " = Mierna Nadváha ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
        matext = true;
    } else if (BMI >= 30 && BMI < 40) {
        let odpoved = " = Obézny ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
        matext = true;
    } else {
        let odpoved = " = Nadmerne Obézny ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
        matext = true;
    };

    if (matext === true) {
        out.classList.toggle("shown");
    } else {
        out.classList.toggle("hidden");
    }
}
hmotnostInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateBMI();
    }
});
vyskaInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateBMI();
    }
});

btnAccept.addEventListener('click', calculateBMI);

