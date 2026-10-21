
const form = document.getElementById("form");
const input = document.getElementById("text");
const list = document.getElementById("list");
const count = document.getElementById("count");
const filters = document.querySelector(".filters");
const clearCompleted = document.getElementById("clear-completed");

let currentFilter = "all";

let tasks = load();

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function load() {
    try {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch (error) {
        return [];
    }
}



function render() {
    list.innerHTML = "";

    const visibleTasks = tasks.filter(function(task) {
    if (currentFilter === "active") return !task.done;
    if (currentFilter === "done") return task.done;
    return true;
});

visibleTasks.forEach(function(task) {
        const li = document.createElement("li");
        const span = document.createElement("span");

        span.textContent = task.text;

        // Apply completed styling
        li.className = task.done ? "done" : "";

        // Create Complete/Undo button
        const toggle = document.createElement("button");
        toggle.textContent = task.done ? "Undo" : "Done";
        toggle.dataset.action = "toggle";

        // Create Delete button
        const del = document.createElement("button");
        del.textContent = "Delete";
        del.dataset.action = "delete";

        li.dataset.id = task.id;

        li.appendChild(span);
        li.appendChild(toggle);
        li.appendChild(del);

        list.appendChild(li);
    });

    const remaining = tasks.filter(function(task) {
        return !task.done;
    }).length;

    count.textContent = remaining + " tasks left";
}


form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        done: false
    };

    tasks.push(task);

    input.value = "";
    save();

    render();
});

list.addEventListener("click", function(event) {
    const action = event.target.dataset.action;

    if (!action) {
        return;
    }

    const li = event.target.closest("li");
    const id = Number(li.dataset.id);

    if (action === "delete") {
        tasks = tasks.filter(function(task) {
            return task.id !== id;
        });
    }

    if (action === "toggle") {
        tasks.forEach(function(task) {
            if (task.id === id) {
                task.done = !task.done;
            }
        });
    }
    save();

    render();
});

filters.addEventListener("click", function(event) {
    const filter = event.target.dataset.filter;

    if (!filter) return;

    currentFilter = filter;
    render();
});

clearCompleted.addEventListener("click", function() {
    tasks = tasks.filter(function(task) {
        return !task.done;
    });

    save();
    render();
});


render();
