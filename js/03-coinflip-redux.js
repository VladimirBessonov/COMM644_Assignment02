// Task 03 The “Coin Flip” Game Redux (10 points)

var coinFlip, choice, result;
var counter = 0;
var totalPlayed = 0;

window.onload = function() {

    var h2 = document.createElement("h2")
    var paraph = document.createElement("p")
    var taskTitle = document.createTextNode("Task 03 The “Coin Flip” Game Redux (10 points)")
    var taskContext = document.createTextNode(
        " In this part of the assignment you will explore what you’ve learned so far about variables, " +
        "for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. " +
        "To complete the game follow the steps outlined below: " +
    "1.\tBegin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet. " +
    "2.\tCreate a for loop that loops 10 times."  +
  "3.\t Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this " +
        "number. Also, make sure to round that number off so that you get either a 0 or 1 as the result." +
        " 4.\tUse a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. "  +
   "If it’s 1, write out “Tails” into the console window."
    )

    h2.appendChild(taskTitle)
    paraph.appendChild(taskContext)
    document.body.appendChild(h2).appendChild(paraph)

    var h1result = document.createElement("h1")

    var resultText = document.createTextNode( "Result:")
    h1result.appendChild(resultText)
    document.body.appendChild(h1result)

    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "Start Playing";
    btn.addEventListener('click', ()=> {
        // window.location.reload()
        while (totalPlayed < 10) {
            selectDace()
            coinFlip = Math.round(Math.random());
            if (choice == 1) {
                switch (coinFlip) {
                    case 1:
                        alert("The flip was heads and you chose heads...you win!")
                        counter++;

                        break;
                    case 0:
                        alert("The flip was tails but you chose heads...you lose! ")

                        break;
                }
            }
            if (choice == 0) {
                switch (coinFlip) {
                    case 0:
                        alert("The flip was tails and you chose tails...you win")
                        counter++;
                        break;
                    case 1:
                        alert("The flip was heads but you chose tails...you lose!")
                        break;
                    default:
                    }
                }
            totalPlayed++;

            }
            result = `you win ${counter} of ${totalPlayed}`;
            // if (result !== undefined) {
                h1result.innerText = "Result: " + result;
            // }
        }

    )



    var btnReset = document.createElement("BUTTON");
    btnReset.innerHTML = "Reset";
    btnReset.addEventListener('click', ()=>{
        counter = 0;
        totalPlayed = 0;
        window.location.reload()
    })
    document.body.appendChild(btn)
    document.body.appendChild(btnReset)


};

function selectDace() {
    choice = prompt("Enter 1 for Head or 0 for Tail")
    if (choice == 0 || choice == 1) {
        return
    } else {
        alert("Enter 0 or 1 ONLY!!")
        selectDace()
    }

}



