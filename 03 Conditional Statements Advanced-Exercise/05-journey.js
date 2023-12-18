function journey(input) {
    let badget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let stayType = "";
    let moneyNeeded = 0;

    if (badget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            moneyNeeded = badget * 0.3;
        } else {
            moneyNeeded = badget * 0.7;
        }
    }
    else if (badget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            moneyNeeded = badget * 0.4;
        } else {
            moneyNeeded = badget * 0.8;
        }
    } else {
        destination = "Europe";
        moneyNeeded = badget * 0.9;
    }
    if (season === "summer" && destination !== "Europe") {
        stayType = "Camp";
    } else {
        stayType = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${stayType} - ${moneyNeeded.toFixed(2)}`);

}

journey(["50", "summer"]);