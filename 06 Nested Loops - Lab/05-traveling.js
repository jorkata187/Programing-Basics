function traveling(input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let destination = command;
        let badget = Number(input[index]);
        index++;
        let currentMoney = 0;
        while (currentMoney < badget) {
            let money = Number(input[index]);
            index++;
            currentMoney += money;
        }
        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;                                                                                                            
    }

}

traveling
(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])