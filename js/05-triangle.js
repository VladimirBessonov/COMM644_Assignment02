var counter = 1
var hashSymbol = '#';

//
// while ( counter < 6 ) {
//     let hashArr = Array.apply(null, Array(counter)).map( () => {return hashSymbol});
//     console.log(hashArr);
//     counter++
// }

// pyramide down

    //
    // (function whileLoop(n) {
    //     setTimeout(function () {
    //         let hashArr = Array.apply(null, Array(n)).map(() => {
    //             return hashSymbol
    //         });
    //         console.log(hashArr);
    //         if (--n) whileLoop(n);
    //     }, 2000)
    // })(6);

// pyramide up
    (function whileLoop(n, m) {
        setTimeout(function () {
            let hashArr = Array.apply(null, Array(n)).map(() => {
                return hashSymbol
            });
            console.log(hashArr);
            if (n < m) {
                ++n;
                whileLoop(n, m);
            }
        }, 2000)
    })(1, 6);
