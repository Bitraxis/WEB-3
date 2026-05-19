function pozdrav() {
    let vysledok = document.getElementById('pozdrav');
    vysledok.innerText =  '👍 Mal som ťa pozdraviť, tak ťa zdravím';
    vysledok.style.color = 'green';
    vysledok.style.fontWeight = 'bold';
    console.log(vysledok);
}

function zmenFarbuPozadia() {
    let meniFarbu = document.getElementById('meniFarbu');
    const farby = [ '#D6336C', '#FF4081', '#FFB6C1', '#FFF5F8' ];
    const nahodneCislo =  Math.floor(Math.random() * farby.length);
    meniFarbu.style.backgroundColor = farby[nahodneCislo];
    meniFarbu.innerText = 'Pozadie: ' + farby[nahodneCislo];
}

function plus() {
    let spocitane = document.getElementById('spocitane');
    spocitane.innerText = parseInt(spocitane.innerText) + 1;
}

function minus() {
    let spocitane = document.getElementById('spocitane');
    spocitane.innerText = parseInt(spocitane.innerText) - 1;
}

function reset() {
    let spocitane = document.getElementById('spocitane');
    spocitane.innerText = 0;
}