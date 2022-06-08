var elementInList = [];

function addExpense(){

    var index = elementInList.length;

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
    if (index == 0){
        uselessRow.remove();
    }
    
    var newLine = document.createElement("tr");
    newLine.id = "line"+ index;

    var newSubject = document.createElement("th");
    newSubject.textContent = subject;

    var newDate = document.createElement("th");
    newDate.textContent = month +"-"+ day + "-" + year;

    var newAmount = document.createElement("th");
    newAmount.textContent = amount;
    
    var removeButton = document.createElement("button")
    removeButton.textContent = "X";
    removeButton.onclick = function(){removeLine(index)};
    
    tableDiv.appendChild(newLine);
    
    newLine.appendChild(newSubject);
    newLine.appendChild(newDate);
    newLine.appendChild(newAmount);
    newLine.appendChild(removeButton);

    elementInList.push(newLine);
}

function removeLine(index){

    var tableDiv = document.getElementById("expenseTable");

    var uselessLine = document.createElement("tr");

    var uselessSubject = document.createElement("th")
    var uselessSubject1 = document.createElement("th")
    var uselessSubject2 = document.createElement("th")
    var uselessSubject3 = document.createElement("th")
    
    uselessSubject.textContent = "No Expenses added yet";


    tableDiv.removeChild(elementInList[index]);

    //when there are no element in list create an empty line
    if (index == 0){

        tableDiv.appendChild(uselessLine);
        
        uselessLine.appendChild(uselessSubject);
        uselessLine.appendChild(uselessSubject1);
        uselessLine.appendChild(uselessSubject2);
        uselessLine.appendChild(uselessSubject3);
    }

}