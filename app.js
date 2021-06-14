/* eslint-disable no-unused-vars */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const Message = require('./models/Message');

const app = express();

mongoose
	.connect(process.env.DB_PASS, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to DB.');
		app.listen(PORT, () => {
			console.log('Listening on PORT ' + PORT);
		});
	})
	.catch((err) => {
		console.log(err);
	});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000;

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
	const messages = await Message.find();
	res.render('index', { title: 'Message Board', messages });
});

app.get('/new', (req, res) => {
	res.render('form', { title: 'Add new message' });
});

app.post('/new', (req, res) => {
	const { text, user } = req.body;
	const newMessage = new Message({ text, user, added: new Date() });
	newMessage.save().then((result) => {
		res.redirect('/');
	});
});

app.use((req, res) => {
	res.render('404', { title: '404' });
});
