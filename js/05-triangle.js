var counter = 1
var hashSymbol = '#';

var size = prompt( 'Enter the size of the Pyramid to build up -> down and down -> up, default is 6', 6)

function delay(n) {  
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

(async (size) => {
    console.log('up -> donw')
while ( counter <= size ) {
    let hashArr = Array.apply(null, Array(counter)).map( () => {return hashSymbol});
    console.log(hashArr);
    await delay(1000)
    counter++
}
console.log('down -> up')
counter--
while ( counter > 0 ) {
    let hashArr = Array.apply(null, Array(counter)).map( () => {return hashSymbol});
    console.log(hashArr);
    await delay(1000)
    counter--
}
})(size);


// (async () => {
//     while ( counter > 1 ) {
//         let hashArr = Array.apply(null, Array(counter)).map( () => {return hashSymbol});
//         console.log(hashArr);
//         await delay(1000)
//         counter--
//     }
//     })();


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
    // (function whileLoop(n, m) {
    //     setTimeout(function () {
    //         let hashArr = Array.apply(null, Array(n)).map(() => {
    //             return hashSymbol
    //         });
    //         console.log(hashArr);
    //         if (n < m) {
    //             ++n;
    //             whileLoop(n, m);
    //         }
    //     }, 2000)
    // })(1, 6);
