const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'pug');

app.use(express.static('public'));

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

app.listen(PORT, () => {
	console.log('Listening on PORT ' + PORT);
});
