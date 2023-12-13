// 1. Брой страници в текущата книга – цяло число в интервала [1…1000]
// 2. Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// 3. Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]

function vacationBooksList(input) {
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalHours = pagesCount / pagesPerHour;
    let hoursPerDay = totalHours / days;

    console.log(hoursPerDay);
}

vacationBooksList(["212","20","2"]);