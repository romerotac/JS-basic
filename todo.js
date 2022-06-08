var itemList = [];

function addItem(){

    // use index to know where to execute the line changes
    var index = itemList.length;

    var item = String(document.getElementById("inputOnList").value);
    var listDiv = document.getElementById("list");
    
    var newLine = document.createElement("li");
    newLine.id = "item"+index;

    var checkButton = document.createElement("button");
    checkButton.id = "checkButton"+index;
    checkButton.onclick = function(){checkItem(index)};
    checkButton.textContent = "check";

    var deleteButton = document.createElement("button")
    deleteButton.id = "deleteButton"+index;
    deleteButton.onclick = function(){removeItem(index)};
    deleteButton.textContent = "x";

    //push the created line in html to an array as global value
    //to have an address to eliminate after
    itemList.push(newLine);
    newLine.textContent = item;

    listDiv.appendChild(newLine);
    
    newLine.appendChild(checkButton);
    newLine.appendChild(deleteButton);

}

function checkItem(index){

    var buttonChangeStatus = document.getElementById("checkButton"+index);
    
    document.getElementById("item"+index).style.textDecoration = "line-through";
    
    buttonChangeStatus.textContent = "uncheck";
    buttonChangeStatus.onclick = function(){uncheckItem(index)};
    
}

function uncheckItem(index){

    var buttonChangeStatus = document.getElementById("checkButton"+index);
    
    document.getElementById("item"+index).style.textDecoration = "none";
    
    buttonChangeStatus.textContent = "check";
    buttonChangeStatus.onclick = function(){checkItem(index)};

}

//use to remove one single item(try to use to created button!!!!!)
function removeItem(index){
    var listDiv = document.getElementById("list");
    //remove element in the position
    listDiv.removeChild(itemList[index]);

}

//use to remove all the items
function removeAll(){
    var listDiv = document.getElementById("list");
    //NOTE!! if using the .lenght on a for loop it will count the number of element each time
    var totalList = itemList.length;

    for (let i = 0; i < totalList; i++){
        listDiv.removeChild(itemList.pop());
    }
}