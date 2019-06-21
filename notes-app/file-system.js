const fs = require('fs');
fs.writeFileSync('notes.txt', 'My name is James Bond.');

//append
fs.appendFileSync('notes.txt', ' Nice to meet you!' + ' What is your name? ');

fs.readFile('notes.txt', 'utf8', function(err, contents) {
	console.log(contents);
});
