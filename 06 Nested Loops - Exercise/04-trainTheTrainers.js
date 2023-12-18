function trainTheTrainers(input) {
let index = 0;
let djuryCount = Number(input[index]);
index++;

let command = input[index];
index++;

let avrAllMarks = 0;
let counter = 0;

while (command !== "Finish") {
  let presentationName = command;

let avrageMark = 0;

    for (let i = 0; i < djuryCount; i++) {
       let marks = Number(input[index]);
        index++;
        avrageMark += marks;
        avrAllMarks += marks; 

        counter++;
    }

    console.log(`${presentationName} - ${(avrageMark / djuryCount).toFixed(2)}.`);
    
    command = input[index];
    index++;
}

console.log(`Student's final assessment is ${(avrAllMarks / counter).toFixed(2)}.`);
}

trainTheTrainers
(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])