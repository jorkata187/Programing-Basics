function repainting(input) {
    let plasticSquereMeter = (Number(input[0]) + 2) * 1.5;
    let paintLiters = Number(input[1]) * 14.50;
    let extraPaint = paintLiters * 0.1;
    let totalPaint = paintLiters + extraPaint;
    let thinnerLiters = Number(input[2]) * 5;
    let workHours = Number(input[3]);
    let bags = 0.40;

    let coastMatireal = plasticSquereMeter + totalPaint + thinnerLiters + bags;
    let coastPerHour = coastMatireal * 0.3;

    let totalCoast = coastMatireal + (workHours * coastPerHour);

    console.log(totalCoast);
}

repainting(["10","11","4","8"]);