function walking(input) {
    let index = 0;

    let command = input[index];
    index++;

    let stepsTotal = 0;
    let extraSteps = 0;

    while (command !== "Going home") {
        let steps = Number(command);
        stepsTotal += steps;
        extraSteps = stepsTotal - 10000;

         if (stepsTotal > 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${extraSteps} steps over the goal!`);
            break;
        } 

        command = input[index];
        index++;
    }
        if (command === "Going home") {
            stepsTotal += Number(input[index]);
            extraSteps += Number(input[index]);
            if (stepsTotal <= 10000) {
               let leftSteps = 10000 - stepsTotal;
                console.log(`${leftSteps} more steps to reach goal.`);
            } else if (stepsTotal >= 10000) {
                console.log("Goal reached! Good job!");
            console.log(`${extraSteps} steps over the goal!`);
            }
        }
    }  


walking
(["1500", "300", "2500", "3000", "Going home", "200"])
