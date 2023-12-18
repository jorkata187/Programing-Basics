function newHouse(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let badget = Number(input[2]);

    totalPrice = 0;

    switch(flowersType) {
        case "Roses":
            totalPrice = flowersCount * 5;
            break;

        case "Dahlias":
            totalPrice = flowersCount * 3.80;
            break;

        case "Tulips":
            totalPrice = flowersCount * 2.80;
            break;

        case "Narcissus":
            totalPrice = flowersCount * 3;
            break;

        case "Gladiolus":
            totalPrice = flowersCount * 2.50;
            break;
    }
    if (flowersType == "Roses" && flowersCount > 80) {
        totalPrice *= 0.90;
    }
    else if (flowersType == "Dahlias" && flowersCount > 90) {
        totalPrice *= 0.85;
    }
    else if (flowersType == "Tulips" && flowersCount > 80) {
        totalPrice *= 0.85;
    }
    else if (flowersType == "Narcissus" && flowersCount < 120) {
        totalPrice *= 1.15;
    }
    else if (flowersType == "Gladiolus" && flowersCount < 80) {
        totalPrice *= 1.20;
    }
    sumLeft = badget - totalPrice;
    sumNeeded = totalPrice - badget;
    if (badget >= totalPrice) {
    console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${sumLeft.toFixed(2)} leva left.`); 
    }
    else if (badget < totalPrice) {
        console.log(`Not enough money, you need ${sumNeeded.toFixed(2)} leva more.`);
    }
}

newHouse(["Tulips","88","260"]);