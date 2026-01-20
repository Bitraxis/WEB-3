let btnAccept = document.getElementById('btnAccept');
const hmotnost = document.getElementById('hmotnost').value
const vyska = document.getElementById('vyska').value
const out = document.getElementById('out');
let odpoved = null
document.addEventListener('click', function() {
    const BMI = Math.round((hmotnost / (vyska*vyska))*100000) / 10;
    console.log(BMI);
    if (BMI < 18.5) {
        let odpoved = " = Podvyživený ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
    } else if ( BMI >= 18.5 && BMI < 25) {
        let odpoved = " = Ideálny ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
    } else if (BMI >= 25 && BMI < 30) {
        let odpoved = " = Mierna Nadváha ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
    } else if (BMI >= 30 && BMI < 40) {
        let odpoved = " = Obézny ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
    } else {
        let odpoved = " = Nadmerne Obézny ";
        console.log(odpoved);
        out.textContent = BMI + odpoved;
    };
} );

