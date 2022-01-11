var express = require('express');
var router = express.Router();

// Require controller modules.
var userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/// USER ROUTES ///

// display user list
router.get('/users', userController.user_list);

//Display Userdetails with specific id.
router.get('/users/:id', userController.user_id);

// add items on Userlist
router.post('/users', userController.user_post);

// update Useritems
router.patch('/users/:id', userController.user_patch);

// Delete Useritems.
router.delete('/users/:id', userController.user_delete);

module.exports = router;
