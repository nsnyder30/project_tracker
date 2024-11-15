const express = require('express');
const fs = require('fs');
const router = express.Router();

const notesFilePath = './data/notes.json';
let notes = JSON.parse(fs.readFileSync(notesFilePath, 'utf-8') || '[]');

router.get('/', (req, res) => {
	res.render('notes', {notes: notes, 
			     title: 'Notes Title', 
			     layout: './layouts/sidebar'});
});

router.post('/add', (req, res) => {
	const newNote = {
		text: req.body.note, 
		timestamp: new Date().toLocaleString()
	};
	notes.push(newNote);

	fs.writeFileSync(notesFilePath, JSON, stringify(notes));
	res.redirect('/notes');
});

module.exports = router;
