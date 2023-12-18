function sequence2K(input) {
    let num = Number(input[0]);

    let k = 1;

    while (k <= num) {
        console.log(k);
        k = k * 2 + 1;
    }
}

sequence2K(["10"]);