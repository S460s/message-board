const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index', { title: 'Homepage' });
});

app.listen(PORT, () => {
	console.log('Listening on PORT ' + PORT);
});
