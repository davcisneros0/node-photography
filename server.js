const express = require('express');
const path = require('path');

//CREATE SERVER
const app = express();

//DISPLAY STATIC FILES FROM PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));

//CREATE ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(3002);
