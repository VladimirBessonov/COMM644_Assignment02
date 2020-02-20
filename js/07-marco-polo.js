
(function (laps) {

    for (var i =0; i <= laps; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log( i +"- Marco! Polo!")
                continue
            }
            console.log(i +"- Marco!")

        }

        if (i % 5 === 0) {
            console.log(i+ "-Polo!" )
        }

    }

})(100);
