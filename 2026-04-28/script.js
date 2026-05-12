const teploty = [12,5,-6,1,-9,4,8];
let spoluTeploty = 0;
let priemer = 0;
teploty.forEach(function(teplota) {
    spoluTeploty = spoluTeploty + teplota;
    console.log(`${spoluTeploty} = ${spoluTeploty} + ${teplota} ;`);
    if (teplota <= 0){
        console.log(teplota + "° Mráz");
    } else if (teplota < 4) {
        console.log(teplota + "° kasovity sneh");
    } else {
        console.log(teplota + "° v pohode");
    }
});
priemer = spoluTeploty / teploty.length;
console.log(priemer.toFixed(2))