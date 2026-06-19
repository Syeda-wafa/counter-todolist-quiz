let counter = 0;
let editTaskElement = null;

function addTask() {

    let name = document.getElementById("name").value.trim();
    let desc = document.getElementById("desc").value.trim();
    let priority = document.getElementById("priority").value;
    let date = document.getElementById("date").value;

    if (name === "") {
        alert("Please enter task name");
        return;
    }

    if (priority === "") {
        alert("Please select priority");
        return;
    }

    const task = {
        name,
        desc,
        priority,
        date
    };

    if (editTaskElement !== null) {

        editTaskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p>${task.desc}</p>
            <p>Priority: ${task.priority}</p>
            <p>Date: ${task.date}</p>

            <div class="actions">
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </div>
        `;

        editTaskElement = null;

    } else {

        createTask(task);
        counter++;
        renderCounter();
    }

    resetForm();
}

function createTask(task) {

    let div = document.createElement("div");
    div.classList.add("task");

    div.innerHTML = `
        <h3>${task.name}</h3>
        <p>${task.desc}</p>
        <p>Priority: ${task.priority}</p>
        <p>Date: ${task.date}</p>

        <div class="actions">
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(div);
}

function deleteTask(btn) {

    btn.parentElement.parentElement.remove();

    counter--;

    if (counter < 0) {
        counter = 0;
    }

    renderCounter();
}

function editTask(btn) {

    let taskDiv = btn.parentElement.parentElement;

    document.getElementById("name").value =
        taskDiv.children[0].innerText;

    document.getElementById("desc").value =
        taskDiv.children[1].innerText;

    let priorityText =
        taskDiv.children[2].innerText.replace("Priority: ", "");

    let dateText =
        taskDiv.children[3].innerText.replace("Date: ", "");

    document.getElementById("priority").value = priorityText;
    document.getElementById("date").value = dateText;

    editTaskElement = taskDiv;
}

function resetForm() {

    document.getElementById("name").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("date").value = "";
    document.getElementById("priority").selectedIndex = 0;
}

function renderCounter() {

    document.getElementById("counter").innerText = counter;
}