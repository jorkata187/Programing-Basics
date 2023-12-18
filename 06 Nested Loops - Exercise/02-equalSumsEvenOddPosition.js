function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let buff = "";

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let evenPositionSum = 0;
        let oddPositionSum = 0;

        let curNumberAsStr = String(curNum);

        for (let i = 0; i < curNumberAsStr.length; i++) {
            let curDigit = Number(curNumberAsStr[i]);
            let position = i + 1;

            if (position % 2 === 0) {
                evenPositionSum += curDigit;
            } else {
                oddPositionSum += curDigit;
            }
        }

        if (evenPositionSum === oddPositionSum) {
            buff += curNumberAsStr + " ";
        }
    }

    console.log(buff);
}

equalSumsEvenOddPosition(["100000","100050"])