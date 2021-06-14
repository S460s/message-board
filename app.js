if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');

const { home_get, get_404 } = require('./controllers/homeController');

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

app.get('/', home_get);
app.use(messagesRoutes);
app.use(get_404);
