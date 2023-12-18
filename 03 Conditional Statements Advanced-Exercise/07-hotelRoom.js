function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;
     
    switch (month) {
        case "May":
            apartmentPrice = 65 * nights;
            if (nights > 7 && nights <= 14) {
                studioPrice = (50 * nights) * 0.95;
            }
            else if (nights > 14) {
                studioPrice = (50 * nights) * 0.7;
            }
            else {
                studioPrice = 50 * nights;
            }
            break;

        case "October":
            apartmentPrice = 65 * nights;
            if (nights > 7 && nights <= 14) {
                studioPrice = (50 * nights) * 0.95;
            }
            else if (nights > 14) {
                studioPrice = (50 * nights) * 0.7;
            }
            else {
                studioPrice = 50 * nights;
            }
            break;

        case "June":
            apartmentPrice = 68.70 * nights;
            if (nights > 14) {
                studioPrice = (75.20 * nights) * 0.8;
            }
            else {
                studioPrice = 75.20 * nights;
            }
            break;

        case "September":
            apartmentPrice = 68.70 * nights;
            if (nights > 14) {
                studioPrice = (75.20 * nights) * 0.8;
            }
            else {
                studioPrice = 75.20 * nights;
            }
            break;

        case "July":
            apartmentPrice = 77 * nights;
            studioPrice = 76 *nights;
            break;

        case "August":
            apartmentPrice = 77 * nights;
            studioPrice = 76 *nights;
            break;
    }
    if (nights > 14) {
        apartmentPrice *= 0.9;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May","15"]);