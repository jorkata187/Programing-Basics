function fishingBoat(input) {
    let badget = Number(input[0]);
    let season = input[1];
    let peopleCount = Number(input[2]);

    let totalPrice = 0;

    switch(season) {
        case "Spring":
            if (peopleCount <= 6) {
                totalPrice = 0.9 * 3000; 
            }
            else if (peopleCount >= 7 && peopleCount <= 11) {
                totalPrice = 0.85 * 3000;
            } else {
                totalPrice = 0.75 * 3000;
            }
            break;
        
        case "Summer":
            if (peopleCount <= 6) {
                totalPrice = 0.9 * 4200; 
            }
            else if (peopleCount >= 7 && peopleCount <= 11) {
                totalPrice = 0.85 * 4200;
            } else {
                totalPrice = 0.75 * 4200;
            }
            break;

        case "Autumn":
            if (peopleCount <= 6) {
                totalPrice = 0.9 * 4200; 
            }
            else if (peopleCount >= 7 && peopleCount <= 11) {
                totalPrice = 0.85 * 4200;
            } else {
                totalPrice = 0.75 * 4200;
            }
            break;

        case "Winter":
            if (peopleCount <= 6) {
                totalPrice = 0.9 * 2600; 
            }
            else if (peopleCount >= 7 && peopleCount <= 11) {
                totalPrice = 0.85 * 2600;
            } else {
                totalPrice = 0.75 * 2600;
            }
            break;
    }
    if (peopleCount % 2 === 0 && season !== "Autumn") {
        totalPrice *= 0.95;
    }
    if (badget >= totalPrice) {
        moneyLeft = badget - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        moneyNeeded = totalPrice - badget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000", "Winter", "13"]);