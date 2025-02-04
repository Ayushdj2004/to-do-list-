const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // '×' character
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData()
}

// Add event listener for Enter key
inputbox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Toggle check or delete task on click
listcontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();