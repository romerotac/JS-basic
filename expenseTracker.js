var elementInList = [];
var valueInList = [];

function addExpense(){


    var subject = String(document.getElementById("subject").value);
    
    var d = new Date(document.getElementById("date").value);
    var day = d.getUTCDate();
    //note: we when using the function it will count the months from 0 to 11 (reading as array)
    var month = d.getMonth()+1;
    var year = d.getUTCFullYear();
    
    
    var amount = Number(document.getElementById("amount").value);

    var tableDiv = document.getElementById("expenseTable");

    var uselessRow = document.getElementById("noValueRow");

    //note: remove the element based on id and if there are no element in the list
    if (elementInList.length == 0){
        uselessRow.remove();
    }

    var index = elementInList.length+1

    var newLine = document.createElement("tr");
    newLine.id = "line"+ index;

    var newSubject = document.createElement("td");
    newSubject.style="text-align:center";
    newSubject.textContent = subject;

    var newDate = document.createElement("td");
    newDate.style="text-align:center";
    newDate.textContent = month +"-"+ day + "-" + year;

    var newAmount = document.createElement("td");
    newAmount.style="text-align:center";
    newAmount.textContent = "$ "+amount;
    
    var newButton = document.createElement("td")
    newButton.style="text-align:center";
    var removeButton = document.createElement("button")
    removeButton.className="btn btn-secondary";
    removeButton.textContent = "x";



    removeButton.onclick = function(){removeLine(index)};
    
    tableDiv.appendChild(newLine);
    
    newLine.appendChild(newSubject);
    newLine.appendChild(newDate);
    newLine.appendChild(newAmount);
    newLine.appendChild(newButton);

    newButton.appendChild(removeButton);

    console.log(elementInList)
    elementInList.push(newLine);
    valueInList.push(amount);
}

function removeLine(index){

    var tableDiv = document.getElementById("expenseTable");

    var uselessLine = document.createElement("tr");

    var uselessSubject = document.createElement("td")
    var uselessSubject1 = document.createElement("td")
    var uselessSubject2 = document.createElement("td")
    var uselessSubject3 = document.createElement("td")
    
    uselessSubject.textContent = "No Expenses added yet";


    console.log(elementInList)
    console.log(elementInList[index])

    tableDiv.removeChild(elementInList[index]);

    //when there are no element in list create an empty line
    if (index == 0){

        tableDiv.appendChild(uselessLine);
        
        uselessLine.appendChild(uselessSubject);
        uselessLine.appendChild(uselessSubject1);
        uselessLine.appendChild(uselessSubject2);
        uselessLine.appendChild(uselessSubject3);
    }

    elementInList.splice(index,1);
    console.log(elementInList)
    console.log(elementInList.length)
    
    valueInList.splice(index,1);
    console.log(valueInList)


}   

function calculate(){
    
    var title = document.getElementById("totalText");
    var line = document.getElementById("resultLine");

    var total = 0
    for (let i = 0; i< valueInList.length; i++){
        total = total + valueInList[i]
    }

    var text = document.createElement("h3");
    text.textContent = "Total:";
    var result = document.createElement("h3");
    result.textContent = "$ " + total;

    title.appendChild(text);
    line.appendChild(result);
}