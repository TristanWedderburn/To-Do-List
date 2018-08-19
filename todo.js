//initializing variables from html
var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");//retieves all list elements

//verify that the user has not entered a blank item
function inputLength(){
	return input.value.length;
}

//adds item with user inputted text to the end of the list
function addItem(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";//resets the input value so that the value isnt continually added to the list

	//add delete button to each new list item
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteBtn);
	deleteBtn.onclick = removeParent;//delete list item on click
}

//listens to click of button then adds
function addItemAfterClick(){
	if(inputLength() > 0){
		addItem();
	}
}

;//listens to press of enter key then adds
function addItemAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode == 13){
		addItem();
	}
}

//event listeners track the input events
button.addEventListener("click", addItemAfterClick);
input.addEventListener("keypress", addItemAfterKeypress);

//adds strikethrough  when list element is clicked
ul.onclick=function(event){
	var target = event.target;
	target.classList.toggle("done");
}

//add delete buttons to all list elements
function deleteButton(i){
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(deleteBtn);
	deleteBtn.onclick = removeParent; //deletes list item on click
}

//retrieve length of list
function listLength(){
	return listItems.length;
}

//add delete button to starting list items
for(i=0;i<listLength();i++){
	deleteButton(i);
}

//delete list items
function removeParent(Event){
	event.target.parentNode.remove();
}



