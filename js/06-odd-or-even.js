
(function (laps) {
    while (laps > 0) {
        var number = Math.round(Math.random()*100);

        if ((number % 2) === 0) {
            console.log(`${number} is even`)

        } else {
            console.log(`${number} is odd`)
        }
        --laps
    }

})(15);
