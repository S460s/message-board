const home_get = (req, res) => {
	res.render('home', { title: 'Homepage' });
};

const get_404 = (req, res) => {
	res.render('404', { title: '404' });
};

module.exports = { home_get, get_404 };
