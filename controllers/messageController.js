const Message = require('../models/Message');

const message_create_get = (req, res) => {
	res.render('form', { title: 'Add new message' });
};

const message_post = (req, res) => {
	const { text, user } = req.body;
	const newMessage = new Message({ text, user, added: new Date() });
	newMessage.save().then(() => {
		res.redirect('/');
	});
};

const messages_get = (req, res) => {
	Message.find().then((messages) => {
		res.render('index', { title: 'Message Board', messages });
	});
};

module.exports = { message_create_get, message_post, messages_get };
