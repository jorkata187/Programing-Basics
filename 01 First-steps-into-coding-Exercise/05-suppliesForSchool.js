// Брой пакети химикали - цяло число в интервала [0...100]
// · Брой пакети маркери - цяло число в интервала [0...100]
// · Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// · Процент намаление - цяло число в интервала [0...100]
function suppliesForSchool(input) {
    let penPacketsCount = Number (input[0]);
    let markerPacketsCount = Number (input[1]);
    let liquedLiters = Number (input[2]);
    let discountPercent = Number (input[3]) / 100;

    let totalPensPrice = penPacketsCount * 5.80;
    let totalMarkersPrice = markerPacketsCount * 7.20;
    let totalLiquedPrice = liquedLiters * 1.20;

    let totalPrice = totalPensPrice + totalMarkersPrice + totalLiquedPrice;
    let discount = totalPrice * discountPercent;

    let priceAfterDiscount = totalPrice - discount;
    console.log(priceAfterDiscount);
}

suppliesForSchool(["2","3","4","25"]);