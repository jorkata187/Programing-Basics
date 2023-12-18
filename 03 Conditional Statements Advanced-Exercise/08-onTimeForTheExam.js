function onTimeForTheExam(input) {
    let hourForExam = Number(input[0]);
    let minsForExam = Number(input[1]);
    let hourAriving = Number(input[2]);
    let minsAriving = Number(input[3]);

    let examStartInMins = (hourForExam * 60) + minsForExam;
    let arivingInMins = (hourAriving * 60) + minsAriving;

    if (examStartInMins < arivingInMins) {
        console.log("Late");
    } else if (arivingInMins === examStartInMins || (arivingInMins < examStartInMins && arivingInMins >= examStartInMins - 30)) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (examStartInMins > arivingInMins && arivingInMins + 60 > examStartInMins) {
        let minsBS = examStartInMins - arivingInMins;
        console.log(`${minsBS} minutes before the start`);
    }
    else if (examStartInMins - 60 >= arivingInMins) {
        let hoursBS = Math.trunc((examStartInMins - arivingInMins) / 60);
        let minsBS = (examStartInMins - arivingInMins) % 60;
        if (minsBS < 10) {
            console.log(`${hoursBS}:0${minsBS} hours before the start`);
        } else {
            console.log(`${hoursBS}:${minsBS} hours before the start`);
        }
    }
    else if (examStartInMins < arivingInMins) {
        let minsAS = arivingInMins - examStartInMins;
        if (minsAS < 60) {
            console.log(`${minsAS} minutes after the start`);
        } else {
            let hoursAS = Math.trunc((arivingInMins - examStartInMins) / 60);
            let minsAS = (arivingInMins - examStartInMins) % 60;
            if (minsAS < 10) {
                console.log(`${hoursAS}:0${minsAS} hours after the start`);
            } else {
                console.log(`${hoursAS}:${minsAS} hours after the start`);
            }
        }
    }
}

onTimeForTheExam(["9", "30", "10", "34"]);