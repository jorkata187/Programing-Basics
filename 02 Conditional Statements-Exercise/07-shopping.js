function Shopping(input) {
    let badget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let procesorsCount = Number(input[2]);
    let memoryCount = Number(input[3]);

    let procesorCost = 0.35 * (250 * videoCardsCount);
    let memoryCost = 0.10 * (250 * videoCardsCount);

    let maneyNeeded = 250 * videoCardsCount + procesorCost * procesorsCount + memoryCost * memoryCount;

    if (videoCardsCount > procesorsCount) {
        maneyNeeded = 0.85 * maneyNeeded;
    }
    if (badget >= maneyNeeded) {
        let badgetLeft = badget - maneyNeeded;
        console.log(`You have ${badgetLeft.toFixed(2)} leva left!`);
    } else {
        let neededMore = maneyNeeded - badget;
        console.log(`Not enough money! You need ${neededMore.toFixed(2)} leva more!`);
    }
}

Shopping(["900","2","1","3"]);