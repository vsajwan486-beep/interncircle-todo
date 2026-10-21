# 📝 Interactive To-Do List

A simple and responsive To-Do List web application built using HTML, CSS, and JavaScript. It helps users organize daily tasks and track their progress with a clean, easy-to-use interface.

## ✨ Features

- **Add Tasks:** Create new tasks easily.
- **Complete Tasks:** Mark tasks as completed or undo completion.
- **Delete Tasks:** Remove individual tasks.
- **Filter Tasks:** View all, active, or completed tasks.
- **Clear Completed:** Remove all completed tasks at once.
- **Task Counter:** Track the number of remaining tasks.
- **LocalStorage:** Save tasks and their completion status across page reloads.
- **Input Validation:** Prevent empty tasks from being added.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage

## 📂 Project Structure

```text
InternCircle-Todo/
├── index.html
├── style.css
├── app.js
└── README.md
```

## 🚀 How to Run

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using the Live Server extension.
4. Start adding and managing your tasks.

## 💾 How LocalStorage Works

The application uses `JSON.stringify()` to convert the tasks array into JSON text and store it in the browser's LocalStorage. When the application loads, `JSON.parse()` retrieves and converts the saved data back into an array.

This allows tasks to remain available after refreshing the page in the same browser.

## 🎯 Project Objective

This project was developed as part of **InternCircle Project 02** to practice DOM manipulation, JavaScript event handling, array operations, and browser data persistence.

## 👨‍💻 Author

**Vivek Sajwan**

---

If you find this project useful, feel free to explore the code and suggest improvements.
