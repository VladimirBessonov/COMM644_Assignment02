var coinFlip, counter =0;

do {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        counter++
        console.log(`you got Head ${counter} times`)
    } else {
        console.log(`you got Tails. 
                     THE END
                     Total Heads is ${counter}`)
    }

} while (coinFlip === 0)