function oldBooks(input) {
    let index = 0;

    let searchBook = input[index];
    index++;

    let bookCounter = 0;

    let command = input[index];
    index++;

    let isFound = false;

    while (command !== "No More Books") {
        let currentBook = command;
        if (searchBook === currentBook) {
            isFound = true;
            break;
        }
        bookCounter++;
        command = input[index];
        index++;
    }
    if (!isFound) {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    } else { 
        console.log(`You checked ${bookCounter} books and found it.`);
    }
}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])