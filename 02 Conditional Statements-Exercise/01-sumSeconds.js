function sumSeconds(input) {
    let time1=Number(input[0]);
    let time2=Number(input[1]);
    let time3=Number(input[2]);

    let sumSeconds = time1+time2+time3;

    let min = Math.floor(sumSeconds / 60);
    let secs = sumSeconds % 60;
    if (secs < 10) {
        console.log(`${min}:0${secs}`);
    } else {
        console.log(`${min}:${secs}`);
    }
}
sumSeconds(["35","45","44"])