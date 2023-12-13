function worldSwimmingRecord(input) {
    let currentRecord = Number(input[0]);
    let distans = Number(input[1]);
    let distansForOneMeter = Number(input[2]);

    let dilate = Math.floor(distans / 15) * 12.5;
    let timeToSwimWithoutDilata = distans * distansForOneMeter;
    let totalTime = timeToSwimWithoutDilata + dilate;

    if (totalTime < currentRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let secNeeded = totalTime - currentRecord;
        console.log(`No, he failed! He was ${secNeeded.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["10464","1500","20"]);