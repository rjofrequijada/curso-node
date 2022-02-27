const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir cpontenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Ricardo jofre',
        titulo: 'Curso de node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Ricardo jofre',
        titulo: 'Curso de node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Ricardo jofre',
        titulo: 'Curso de node'
    });
});


app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
});

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html')
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})