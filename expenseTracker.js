
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

var flagCheckName = false;
var flagCheckDate = false;
const idErrorName = 'errorName';
const idErrorDate = 'errorDate'; 

const alertName = document.getElementById("alertForName");
const alertDate = document.getElementById("alertForDate");
const alertAmount = document.getElementById("alertForAmount");

const alert = (message, type, line,id) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert" id = "${id}">`,
      `   <div>${message}</div>`,
      '</div>'
    ].join('')
    
    line.append(wrapper);
  }




function checkName(name){
    if (name == '' && flagCheckName == false){
        alert('Please enter a Name','danger',alertName,idErrorName);
        flagCheckName = true;
        return true;
    }
    
    if (flagCheckName == true){
        flagCheckName = false;
        $('#'+idErrorName).alert('close')
    }
    
    return false;
}

function checkDate(date){
    
    if (date == 'NaN-NaN-NaN' && flagCheckDate == false){
        alert('Please enter a correct Date','danger',alertDate,idErrorDate);
        flagCheckDate = true;
        return true;
    }
    
    if (flagCheckDate == true){
        flagCheckDate = false;
        $('#'+idErrorDate).alert('close')
    }

    return false;
}


function addExpense(){



    var subject = String(document.getElementById("subject").value);
    var amount = parseFloat(document.getElementById("amount").value).toFixed(2);

    var d = new Date(document.getElementById("date").value);
    var day = d.getUTCDate();
    //note: we when using the function it will count the months from 0 to 11 (reading as array)
    var month = d.getMonth()+1;
    var year = d.getUTCFullYear();
    
    var tableDiv = document.getElementById("expenseTable");
    var uselessRow = document.getElementById("noValueRow");


    var newLine = document.createElement("tr");
    newLine.id = "line"+ index;

    var itemToPush = new Item(index,newLine,amount);
  
    var newSubjectTD = document.createElement("td");
    newSubjectTD.style="text-align:center";
    newSubjectTD.textContent = subject;

    var newDateTD = document.createElement("td");
    var date = month +"-"+ day + "-" + year
    newDateTD.style="text-align:center";
    newDateTD.textContent = date;


    var newAmountTD = document.createElement("td");
    newAmountTD.style="text-align:center";
    newAmountTD.textContent = "$ "+amount;
    
    var newButtonTD = document.createElement("td")
    newButtonTD.style="text-align:center";
    
    var removeButton = document.createElement("button")
    removeButton.className="btn btn-secondary";
    removeButton.textContent = "x";
    removeButton.onclick = function(){removeLine(itemToPush)};
    
    var flag1 = checkDate(date);
    var flag2 = checkName(subject);


    console.log(flag1)
    console.log(flag2)
    console.log(flagCheckDate)
    console.log(flagCheckName)

    if ((flag1 == false && flag2 == false ) && (flagCheckDate == false && flagCheckName == false)){
    tableDiv.appendChild(newLine);
    
    newLine.appendChild(newSubjectTD);
    newLine.appendChild(newDateTD);
    newLine.appendChild(newAmountTD);
    newLine.appendChild(newButtonTD);

    newButtonTD.appendChild(removeButton);
    
    items.push(itemToPush);

    index++;
    subject.textContent = "";
        
    }

    

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
        uselessRow.style.display = "contents";
    }
}   


function calculate(){
    
    var title = document.getElementById("totalTitle");
    var lineResult = document.getElementById("totalValue");

    var total = 0;
    for (let i = 0; i< items.length; i++){
        total = parseFloat(total) + parseFloat(items[i].getValue());
    }

    title.style = "display: contents;";
    lineResult.style = "display: contents;";
    lineResult.textContent = "$ " + total.toFixed(2);

}
