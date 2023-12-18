function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let freeSpace = width * length * hight;

    while (command !== "Done") {
        let boxes = Number(command);
        freeSpace -= boxes;

        if (freeSpace < 0) {
            break;
        }
        command = input[index];
        index++;
    }
    if (freeSpace >= 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
}

moving
(["10",
"1",
"2",
"4",
"6",
"Done"]);