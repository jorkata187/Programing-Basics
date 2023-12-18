function walking(input) {
    let index = 0;

    let command = input[index];
    index++;

    let stepsTotal = 0;

    while (command !== "Going home") {
        let steps = Number(command);
        stepsTotal += steps;

        if (stepsTotal >= 10000) {
            let extraSteps = stepsTotal - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${extraSteps} steps over the goal!`);
            break;
        } 
        command = input[index];
        index++;
    }
    if (command === "Going home") {
        let steps = Number(input[index]);
        stepsTotal += steps;

        if (stepsTotal >= 10000) {
            let extraSteps = stepsTotal - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${extraSteps} steps over the goal!`);
        } else {
            let stepsNeeded = 10000 - stepsTotal;
            console.log(`${stepsNeeded} more steps to reach goal.`);
        }
    }
}

walking
(["1000",
"1500",
"2000",
"6500"])
