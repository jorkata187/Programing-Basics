function trekkingMania(input) {
    let groups = Number(input[0]);

    let musalaCount = 0;
    let monblanCount = 0;
    let kilimandjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 1; i <= groups; i++) {
        let peopleInTeam = Number(input[i]);

        if (peopleInTeam <= 5) {
            musalaCount += Number(input[i]);
        } else if (peopleInTeam <= 12) {
            monblanCount += Number(input[i]);
        } else if (peopleInTeam <= 25) {
            kilimandjaroCount += Number(input[i]);
        } else if (peopleInTeam <= 40) {
            k2Count += Number(input[i]);
        } else {
            everestCount += Number(input[i]);
        }
    }
    let peopleCount = musalaCount + monblanCount + kilimandjaroCount + k2Count + everestCount;

    console.log(((musalaCount / peopleCount) * 100).toFixed(2) + "%");
    console.log(((monblanCount / peopleCount) * 100).toFixed(2) + "%");
    console.log(((kilimandjaroCount / peopleCount) * 100).toFixed(2) + "%");
    console.log(((k2Count / peopleCount) * 100).toFixed(2) + "%");
    console.log(((everestCount / peopleCount) * 100).toFixed(2) + "%");
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);