function yardGreening(input) {
    let squerMeter = Number(input[0]);
    let price = squerMeter * 7.61;
    let discount = price * 0.18;
    let totalPrice = price - discount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);