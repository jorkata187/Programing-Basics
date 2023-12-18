function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let avrageGrade = 0;
    let badGradeCounter = 0;
    let i = 1;
    let hasExcluded = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            badGradeCounter++;
            if (badGradeCounter > 1) {
                hasExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }
        avrageGrade += grade;
        i++;
    }
    if (!hasExcluded) {
        console.log(`${name} graduated. Average grade: ${(avrageGrade / 12).toFixed(2)}`);
    }

}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);