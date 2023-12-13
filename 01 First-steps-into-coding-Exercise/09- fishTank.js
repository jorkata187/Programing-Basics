// 1. Дължина в см – цяло число в интервала [10 … 500]
// 2. Широчина в см – цяло число в интервала [10 … 300]
// 3. Височина в см – цяло число в интервала [10… 200]
// 4. Процент – реално число в интервала [0.000 … 100.000]
function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentFilled = Number(input[3]) / 100;

    let totalVolume = (length * width * hight) / 1000;
    let volumeTaken = percentFilled * totalVolume;
    
    let freeVolume = totalVolume - volumeTaken;

    console.log(freeVolume);
}

fishTank(["85","75","47","17"]);