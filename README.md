# 📝 Interactive To-Do List

A clean and responsive To-Do List web application built with HTML, CSS, and JavaScript. It helps users organize daily tasks through a simple interface with persistent browser storage.

## ✨ Features

- ➕ Add new tasks
- ✅ Mark tasks as completed and undo completion
- 🗑️ Delete individual tasks
- 🔍 Search tasks instantly by name
- 📂 Filter tasks by All, Active, and Done
- 🧹 Clear all completed tasks
- 📊 Track remaining tasks
- 💾 Save tasks and completion status using LocalStorage
- 🎨 Clean lavender-and-purple theme
- 📱 Responsive layout for smaller screens
- 🛡️ Reject empty tasks and handle invalid saved JSON

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage

## 📁 Project Structure

```text
InternCircle-Todo/
├── index.html
├── style.css
├── app.js
└── README.md
```

## 🚀 Run Locally

1. Clone or download this repository.
2. Open the folder in Visual Studio Code.
3. Open `index.html` with the Live Server extension.
4. Add and manage your tasks.

## 💾 Data Persistence

Tasks are converted to JSON using `JSON.stringify()` and saved in LocalStorage. On startup, `JSON.parse()` loads the saved tasks so they remain available after refreshing the page in the same browser.

## 🎯 Project Objective

Developed as part of **InternCircle Project 02** to practice DOM manipulation, event handling, array operations, filtering, and browser storage.

## 👨‍💻 Author

**Vivek Sajwan**

- GitHub: https://github.com/vsajwan486-beep
- LeetCode: https://leetcode.com/u/vivek_sajwan/
- HackerRank: https://www.hackerrank.com/vsajwan486/hackos

---

This project was created for learning and practice.
