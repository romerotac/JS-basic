

function addition(numberOne,numberTwo){
    return numberOne + numberTwo;
}

function division(numberOne,numberTwo){
    return numberOne / numberTwo;
}

function subtraction(numberOne,numberTwo){
    return numberOne - numberTwo;
}

function multiplicaton(numberOne,numberTwo){
    return numberOne * numberTwo;
}

function calculate(){

    var numberOne = Number(document.getElementById("numberOne").value);
    var numberTwo = Number(document.getElementById("numberTwo").value);
    var symbol = String(document.getElementById("symbol").value);

    if (symbol == 'plus'){
        console.log('numberOne + numberTwo')
        document.getElementById("res").innerText = addition(numberOne,numberTwo)
    } else if (symbol == 'division'){
        document.getElementById("res").innerText = division(numberOne,numberTwo)
    } else if (symbol == 'minus'){
        document.getElementById("res").innerText = subtraction(numberOne,numberTwo)
    } else if (symbol == 'times'){
        document.getElementById("res").innerText = multiplicaton(numberOne,numberTwo)
    } 
}
