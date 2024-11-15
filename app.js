const express = require ('express');
const app = express();
const notesRouter = require('./routes/notes');
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('layout', './layouts/full-width');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index', { body: 'Default Body', title: 'Default Title'}));
app.use('/notes', notesRouter);
// app.use ('/notes', (req, res) => res.render('index', {body: 'False Body', title: 'False Title'}));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
