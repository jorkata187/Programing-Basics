function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let piecesCount = width * length;

    while (command !== "STOP") {
        let piecesTaken = Number(command);
        piecesCount -= piecesTaken;
        
        if (piecesCount < 0) {
            break;
        } 
        command = input[index];
        index++;
    } 
    if (piecesCount >= 0) {
    console.log(`${piecesCount} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(piecesCount)} pieces more.`);
    }
}

cake
(["10",

"2",

"2",

"4",

"6",

"STOP"])