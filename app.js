const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

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
	res.render('index', { title: 'Message Board', messages });
});

app.get('/new', (req, res) => {
	res.render('form', { title: 'Add new message' });
});

app.post('/new', (req, res) => {
	const { text, user } = req.body;
	messages.push({ text, user, added: new Date() });
	res.redirect('/');
});

app.use((req, res) => {
	res.render('404', { title: '404' });
});

app.listen(PORT, () => {
	console.log('Listening on PORT ' + PORT);
});
