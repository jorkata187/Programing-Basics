// • Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
function basketballEquipment(input) {
    let taxForAYear = Number(input[0]);
    let shoes = taxForAYear - (taxForAYear * 0.4);
    let kit = shoes - (shoes * 0.2);
    let ball = kit * 0.25;
    let accessoaries = ball * 0.20;

    let total = (taxForAYear + shoes + kit + ball + accessoaries);
    console.log(total);
}

basketballEquipment(["365"]);