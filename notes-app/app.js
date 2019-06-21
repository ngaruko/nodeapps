const utils = require('./utils.js');
const notes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');



/*
console.log(`${utils.name} is ${utils.add(31, 10)} years old`);
console.log(notes.getNotes())

// validator - seee documentation
console.log(validator.isEmail('bede@bede.com'));


//chalk
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// ES2015 tagged template literal


// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
console.log('we are using nodemon');
//
*/

/*
var command = process.argv[2];
if (command === 'add') {
	console.log('adding notes');
}
else {


	command === 'remove' ? console.log('removing notes') : console.log('please eneter valid operator');
}
*/
yargs.version('1.1.0');

yargs.command({
	command: 'add',
	describe: 'adding note',
	builder: {
		title:
		{				
			describe: 'Note title',
			demandOption: true,
			type: String
		},
		body:
		{
			describe: 'Note body',
			demandOption: true,
			type: String
		}
	},
	handler: (argv) => {
		notes.addnote(argv.title, argv.body);
	}
});

yargs.command({
	command: 'remove',
	describe: 'remove note',
	handler: (argv) => {
			notes.removeNote(argv.title);
	}
});

yargs.command({
	command: 'read',
	describe: 'Read note',
	handler: (argv) => {
		console.log(chalk.green('Reading the note!'));
		notes.getNote(argv.title);
		
	}
});

yargs.command({
	command: 'list',
	describe: 'list the notes',
	handler: () => {
		console.log(chalk.green('Listing out all the notes!'));
		notes.listNotes();
	}
});

//console.log(process.argv);
const arguments = yargs.argv;
//console.log(JSON.stringify(arguments));
