function addItem(){
    var li = document.createElement("LI");
    var input = document.getElementById("inputField");
    li.innerHTML=input.value;
    input.value=" ";
    document.getElementById("list").appendChild(li);
}
