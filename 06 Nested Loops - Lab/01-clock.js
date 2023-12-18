function clock() {

    for (hors = 0; hors < 24; hors++) {
        for (min = 0; min < 60; min++) {
            console.log(`${hors}:${min}`);
        }
    }
}

clock()