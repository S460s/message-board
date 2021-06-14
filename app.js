require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { messages_get } = require('./controllers/messageController');

const messagesRoutes = require('./routes/messageRoutes');

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

const PORT = process.env.PORT || 8000;

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', messages_get);

app.use('/', messagesRoutes);

app.use((req, res) => {
	res.render('404', { title: '404' });
});
