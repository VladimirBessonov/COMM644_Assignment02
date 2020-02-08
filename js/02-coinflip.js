var coinFlip, choice;
var counter = 0;
var totalPlayed = 0;

    var text = "The flip was heads and you chose heads...you win!"
    var text1 = "The flip was heads but you chose tails...you lose!"
    var text2 = "The flip was tails but you chose heads...you lose! "
    var text3 = "The flip was tails and you chose tails...you win"

var result;

window.onload = function() {

    var h2 = document.createElement("h2")
    var paraph = document.createElement("p")
    var taskTitle = document.createTextNode("Task 02 The “Coin Flip” Game (10 points)")
    var taskContext = document.createTextNode(
        " In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”.\n " +
        "To complete the game follow the steps outlined below:\n" +
        "1.\tBegin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.\n" +
        "2.\tPrompt the user to select “Heads or Tails” and set the result to a new variable called choice.\n" +
        "3.\tUse a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. \n" +
        "4.\tIf the result is heads and the user selects heads, display the following message within an alert: \n" +
        "The flip was heads and you chose heads...you win!\n" +
        "5.\tIf the result is heads and the user selects tails, display the following message within an alert: \n" +
        "The flip was heads but you chose tails...you lose!\n" +
        "6.\tIf the result is tails and the user selects heads, display the following message within an alert: \n" +
        "The flip was tails but you chose heads...you lose!\n" +
        "7.\tIf the result is tails and the user selects tails, display the following message within an alert: \n" +
        "The flip was tails and you chose tails...you win!\n" +
        "8.\tUse two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.\n ")

    h2.appendChild(taskTitle)
    paraph.appendChild(taskContext)
    document.body.appendChild(h2).appendChild(paraph)

    var h1result = document.createElement("h1")


    // compare('first')
    // compare('second')




    var resultText = document.createTextNode( "Result:")
    h1result.appendChild(resultText)

    document.body.appendChild(h1result)
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "Start Playing";
    btn.addEventListener('click', ()=> {
        // window.location.reload()
        selectDace()
        coinFlip =  Math.round(Math.random());
        if (choice == 1) {
            switch (coinFlip) {
                case 1:
                    alert("The flip was heads and you chose heads...you win!")
                    counter++;
                    totalPlayed++;
                    result = `score ${counter}, total played ${totalPlayed}`
                    break;
                case 0:
                    alert("The flip was tails but you chose heads...you lose! ")
                    totalPlayed++;
                    result = `score ${counter}, total played ${totalPlayed}`
                    break;
            }
        }
        if (choice == 0) {
            switch (coinFlip) {
                case 0:
                    alert("The flip was tails and you chose tails...you win")
                    counter++;
                    totalPlayed++;
                    result = `score ${counter}, total played ${totalPlayed}`
                    break;
                case 1:
                    alert("The flip was heads but you chose tails...you lose!")
                    totalPlayed++;
                    result = `score ${counter}, total played ${totalPlayed}`
                    break;
                default:
            }
        }

        h1result.innerText = "Result: " + result;
    })
    var btnReset = document.createElement("BUTTON");
    btnReset.innerHTML = "Reset";
    btnReset.addEventListener('click', ()=>{
        counter = 0;
        totalPlayed = 0;
        window.location.reload()
    })
    document.body.appendChild(btn)
    document.body.appendChild(btnReset)

    // document.write(result)

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



