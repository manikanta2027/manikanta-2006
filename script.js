let input = document.querySelector("#input-bx");
let list = document.querySelector("#list-container");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    if (input.value.trim().length === 0) {
        alert("Write something");
    } else {
        addTask(input.value.trim());
        input.value = '';
    }
});

function addTask(taskText) {
    let li = document.createElement("li");

    // Add checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        li.classList.toggle("checked");
        savedata();
    });

    // Add task text
    let spanText = document.createElement("span");
    spanText.className = "task-text";
    spanText.textContent = taskText;

    // Add delete button
    let spanDel = document.createElement("span");
    spanDel.innerHTML = "\u00d7";
    spanDel.className = "delete";
    spanDel.addEventListener("click", function () {
        li.remove();
        savedata();
    });

    li.appendChild(checkbox);
    li.appendChild(spanText);
    li.appendChild(spanDel);

    list.appendChild(li);
    savedata();
}

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}

list.addEventListener("click", function (e) {
    const target = e.target;

    if (target.type === "checkbox") {
        target.parentElement.classList.toggle("checked");
        savedata();
    }

    if (target.classList.contains("delete")) {
        target.parentElement.remove();
        savedata();
    }
});
function showtask() {
    list.innerHTML = localStorage.getItem("data") || "";
}


showtask();
