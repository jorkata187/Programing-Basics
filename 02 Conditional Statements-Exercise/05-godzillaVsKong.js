function godzillaVsKong(input) {
    let badget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothesPricePerActor = Number(input[2]);

    let decorPrice = 0.1 * badget;
    let totalClothesPrice = actorsCount * clothesPricePerActor;

    if (actorsCount > 150) {
        totalClothesPrice = 0.9 * totalClothesPrice;
    }

    let totalPrice = decorPrice + totalClothesPrice;

    if (badget >= totalPrice) {
        let moneyLeft = badget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - badget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }


}

godzillaVsKong(["20000","120","55.5"]);