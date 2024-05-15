var express = require('express');
var router = express.Router();

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'Mini Message Board'});
});

router.post('/new', (req, res, next) => {
  const {messageAuthor, messageText} = req.body;
  messages.push({
    text: messageText,
    user: messageAuthor,
    added: new Date(),
  });
  res.redirect('/')
});

module.exports = router;
