// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Simple in-memory storage for to-dos
let todos = [
    { id: 1, task: "Learn Docker", done: false },
    { id: 2, task: "Build a Node.js app", done: false }
];

// Route to show all todos
app.get('/', (req, res) => {
    res.render('index', { todos });
});

// Route to create a new todo
app.post('/add', (req, res) => {
    const newTask = req.body.task;
    const newTodo = { id: todos.length + 1, task: newTask, done: false };
    todos.push(newTodo);
    res.redirect('/');
});

// Route to mark todo as done
app.get('/done/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.done = !todo.done;
    }
    res.redirect('/');
});

// Route to delete a todo
app.get('/delete/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== todoId);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Todo app is listening on port http://localhost/${port}`);
});
