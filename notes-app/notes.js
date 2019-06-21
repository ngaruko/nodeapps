const fs = require('fs');
const chalk = require('chalk');

const addnote = (title, body) => {
	const notes = loadNotes();
	//const duplicates = notes.filter((note) => note.title === title);
	const duplicateNote = notes.find((note) => note.title === title);
	debugger;
	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log('New note added.');
	} else {
		console.log(chalk.red('Note title already exists.'));
	}
	
};

const saveNotes = (notes) => {
	const dataJson = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.Json');
		const dataJson = dataBuffer.toString();
		return JSON.parse(dataJson);
		//console.log('Read Title: ' + data.title);
		
	} catch (error) {
		console.log('No json file found!');
		return [];
	}
};
const removeNote = (title) => {
	
	//see if title exist
	const notes = loadNotes();
	const notesToKeep= notes.filter((note) => {
		return note.title !== title;
	});
	if (notesToKeep.length === notes.length) {
		console.log(chalk.red('No such title'));
	} else {
		console.log(chalk.green('Note removed'));
		saveNotes(notesToKeep);
	}

};

//lisy notes
const listNotes = () => {
	loadNotes().forEach(note => {
		//console.log(JSON.stringify(note));
		console.log(note.title + ': ' + note.body);
	});
	
};

//get note
const getNote = (title) => {
	const noteToRead = loadNotes().find((note) =>  note.title === title);
	if (noteToRead) {
		console.log(chalk.green('Note found ... '));
		console.log(JSON.stringify(noteToRead));
	} else {
		
		console.log(chalk.red('No such note exists'));
	}
};
module.exports = {
	addnote,
	removeNote,
	getNote,
	listNotes
}