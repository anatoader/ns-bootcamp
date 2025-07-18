function exercise1() {
    // Convert a positive number in base 10 to its equivalent in binary, using repeated divisions.
    function decToBin(number) {
        if (number === 0) { return 0; }

        let binary = '';
        while (number > 0) {
            binary = (`${number % 2}`) + binary;
            number = Math.floor(number / 2)
        }
        return binary;
    }

    console.log(decToBin(11))
    console.log(decToBin(4))
    console.log(decToBin(0))
}

function exercise2() {
    // Convert a positive number from base 10 to base 16. This time, use one of the Number Instance Methods.
    function convertToBase(number, base = 16) {
        return number.toString(base)
    }

    console.log(convertToBase(21))
}

function exercise3() {
    // Create a date based on a time string in the format of YYYY-MM-DDTHH:mm:ss.sssZ, and display it in the current locale
    let date = new Date("2025-07-18T18:00:02Z")
    console.log(date.toLocaleString())
}

function exercise4() {
    // Display the current UTC Date & Time, in the format It is Monday, 1 PM.
    // Take a look at Intl for some ways to format date times, and experiment with various options.
    let currentDate = new Date()
    console.log(`It is ${Intl.DateTimeFormat('en', {timeZone: 'UTC', hour: 'numeric', weekday: 'long'}).format(currentDate)}`);
}

function exercise5() {
    // Display the current Date & Time in Greece, using the English and Greek locales.
    const date = new Date();
    const options = {
        timeZone: 'EET',
        timeStyle: 'long',
        dateStyle: 'medium'
    }

    console.log(Intl.DateTimeFormat('en', options).format(date));
    console.log(Intl.DateTimeFormat('el', options).format(date));
}

function exercise6() {
    // Write a script that, given 3 datetime strings, checks if the third is between the first and second.
    // In your solution, do you need to account for timezones?
    function isBetweenDates(date, from, to) {
        return from <= date && date <= to;
    }

    let date1 = new Date("2025-07-15T18:00:02Z")
    let date2 = new Date("2025-07-16T18:00:02Z")
    let date3 = new Date("2025-07-18T18:00:02Z")

    console.log(isBetweenDates(date2, date1, date3))
}

// exercise1()
// exercise2()
// exercise3()
// exercise4()
// exercise5()
exercise6()