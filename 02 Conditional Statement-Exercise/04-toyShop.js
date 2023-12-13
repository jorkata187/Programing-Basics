function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let tracksCount = Number(input[5]);

    let moneyEarned = puzzlesCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + tracksCount * 2;
    let totalCount = puzzlesCount + dollsCount + bearsCount + minionsCount + tracksCount;

    if (totalCount >= 50) {
        moneyEarned = 0.75 * moneyEarned;
    }

    moneyEarned = 0.9 * moneyEarned;

    if (moneyEarned >= vacationPrice) {
        let moneyLeft = moneyEarned - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = vacationPrice - moneyEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}
toyShop(["320","8","2","5","5","1"])