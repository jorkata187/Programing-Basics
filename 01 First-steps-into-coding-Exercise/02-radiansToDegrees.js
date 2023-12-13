function radiansToDegrees(input) {
    let radiens = Number(input[0]);
    let degrees = radiens * 180 / Math.PI;
    console.log(degrees);
}

radiansToDegrees(["3.1416"]);