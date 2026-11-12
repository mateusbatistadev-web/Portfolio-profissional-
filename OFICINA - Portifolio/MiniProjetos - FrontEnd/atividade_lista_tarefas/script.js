var btn = document.getElementById("addTaskBtn");
var list = document.getElementById("taskList");
var input = document.getElementById("taskInput");

btn.addEventListener("click", adicionarTarefa)

function adicionarTarefa() {
    if(input.value == ""){
        alert("Digite uma tarefa!")
    } else {
        var btnDel = document.createElement("button");
        var li = document.createElement("li");
        li.innerHTML = input.value;btnDel.innerHTML = "X";
        li.appendChild(btnDel);
        list.appendChild(li);

        btnDel.addEventListener("click", ()=>{
            li.remove();
        })
    }
}
