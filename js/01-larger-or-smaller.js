// // Task
//
// Create an application that accepts two integers within two separate prompts.
//     Then, display only the larger of the two within the browser window.
//     Don’t forget to handle the fact that the two could be equal.



var value1, value2, result, resultValue;


window.onload = function() {


    var h2 = document.createElement("h2")
    var paraph = document.createElement("p")
    var taskTitle = document.createTextNode("Task Number 01")
    var taskContext = document.createTextNode(
        "Create an application that accepts two integers within two separate prompts.\n" +
        "    Then, display only the larger of the two within the browser window.\n" +
        "    Don’t forget to handle the fact that the two could be equal.")
    h2.appendChild(taskTitle)
    paraph.appendChild(taskContext)
    document.body.appendChild(h2).appendChild(paraph)

    var h1result = document.createElement("h1")


        myfunc('first')
        myfunc('second')


    console.log(value1)
    console.log(value2)

    if (value1 > value2) { result = value1;
    alert(`the first value is bigger: ${value1}`)}
    else if  (value2 > value1) {
        result = value2;
        alert(`the second value is bigger: ${value2}`)
    } else {
        alert(`entered values are equal: ${value1}`);
        result = value1
    }

    var resultText = document.createTextNode( "Result:" + result)
    h1result.appendChild(resultText)

    document.body.appendChild(h1result)
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "reload";
    btn.addEventListener('click', ()=> {
        window.location.reload()
    })
    document.body.appendChild(btn)

    // document.write(result)

};

function myfunc(param) {
    var value = window.prompt(`please enter ${param} integer number`, )
    if (value === "" || value === null) {
        alert('you entered empty string or canceled, try again')
        myfunc(param)
    }
    if (Number(value) === NaN) {
        alert('you entered not a number, try again')
        myfunc(param)
    }
    if (Number.isInteger(Number(value))) {
        if (param === 'first') {
            value1 = Number(value)
        } else {
            value2 = value
        }

    } else {
        alert('you entered not INTEGER')
        myfunc(param)

    }
}


