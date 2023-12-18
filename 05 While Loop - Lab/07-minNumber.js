function minNumber(input) {
    let index = 0;
    let num = input[index];

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (num !== "Stop") {
        let curNumber = Number(input[index]);
        if (curNumber < minNumber) {
            minNumber = curNumber;
        }
        index++;
        num = input[index];
    }
    console.log(minNumber);
}

minNumber
    (["100",
        "99",
        "80",
        "70",
        "Stop"])