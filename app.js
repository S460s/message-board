const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

app.get('/', (req, res) => {
	res.render('index', { title: 'Homepage', messages });
});

app.get('/new', (req, res) => {
	res.render('form', { title: 'Add new message' });
});

app.post('/new', (req, res) => {
	const { text, user } = req.body;
	messages.push({ text, user, added: new Date() });
	res.redirect('/');
});

app.listen(PORT, () => {
	console.log('Listening on PORT ' + PORT);
});
