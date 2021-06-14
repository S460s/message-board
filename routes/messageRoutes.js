const express = require('express');
const {
	message_create_get,
	message_post,
} = require('../controllers/messageController');

const router = express.Router();

router.get('/new', message_create_get);
router.post('/new', message_post);

module.exports = router;
