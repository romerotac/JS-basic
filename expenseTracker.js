
class Item {
    constructor(id,row,value){
        this.id = id;
        this.row = row;
        this.value = value;
    }

    getID(){
        return this.id;
    }

    getValue(){
        return this.value;
    }

    getRow(){
        return this.row;
    }

    //this function check the id of the item to erase
    deleteItem(item){
        items = items.filter(u =>{
            return u.id != item.id; 
        })
    }

}

//use to indicate the first index and id of the class object item
var index = 0;
//used to store all the items class object
var items = [];

function addExpense(){

    

    var subject = String(document.getElementById("subject").value);
    var amount = Number(document.getElementById("amount").value);

    var d = new Date(document.getElementById("date").value);
    var day = d.getUTCDate();
    //note: we when using the function it will count the months from 0 to 11 (reading as array)
    var month = d.getMonth()+1;
    var year = d.getUTCFullYear();
    
    var tableDiv = document.getElementById("expenseTable");
    var uselessRow = document.getElementById("noValueRow");



    var itemToPush = new Item(index,newLine,amount);
 
    

    var newLine = document.createElement("tr");
    newLine.id = "line"+ index;
  
    var newSubjectTD = document.createElement("td");
    newSubject.style="text-align:center";
    newSubject.textContent = subject;

    var newDateTD = document.createElement("td");
    newDate.style="text-align:center";
    newDate.textContent = month +"-"+ day + "-" + year;

    var newAmountTD = document.createElement("td");
    newAmount.style="text-align:center";
    newAmount.textContent = "$ "+amount;
    
    var newButtonTD = document.createElement("td")
    newButton.style="text-align:center";
    
    var removeButton = document.createElement("button")
    removeButton.className="btn btn-secondary";
    removeButton.textContent = "x";
    removeButton.onclick = function(){removeLine(itemToPush)};
    
    tableDiv.appendChild(newLine);
    
    newLine.appendChild(newSubjectTD);
    newLine.appendChild(newDateTD);
    newLine.appendChild(newAmountTD);
    newLine.appendChild(newButtonTD);

    newButtonTD.appendChild(removeButton);
    
    items.push(itemToPush);

    index++;

    if (items.length != 0){
        uselessRow.style.display = "none";
    }

    
}

function removeLine(itemToPush){

    var uselessRow = document.getElementById("noValueRow");
    var tableDiv = document.getElementById("expenseTable");

    tableDiv.removeChild(itemToPush.row);

    itemToPush.deleteItem(itemToPush);

   //when there are no element in list create an empty line
    if (items.length == 0){
        uselessRow.style.display = "block";
    }
}   


function calculate(){
    
    var title = document.getElementById("totalText");
    var line = document.getElementById("resultLine");

    var total = 0;
    for (let i = 0; i< items.length; i++){
        total = total + items[i].getValue();
    }

    var text = document.createElement("h3");
    text.textContent = "Total:";
    var result = document.createElement("h3");
    result.textContent = "$ " + total;

    title.appendChild(text);
    line.appendChild(result);
}