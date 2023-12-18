function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let firstNum = 0;
    let secoundNum = 0;
    let counter = 0;

    let isFound = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y;
            counter++;
            if (sum === magicNumber) {
                firstNum = x;
                secoundNum = y;
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (isFound) {
        console.log(`Combination N:${counter} (${firstNum} + ${secoundNum} = ${magicNumber})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers
    (["1",
        "10",
        "5"])