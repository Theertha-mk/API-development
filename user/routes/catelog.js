const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

// Require controller modules.
const userController = require('../controllers/userController')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
})

/// USER ROUTES ///

// display user list
router.get('/users', userController.user_list)

//Display Userdetails with specific id.
router.get('/users/:id', userController.user_id)

// add items on Userlist
router.post(
  '/users',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  userController.user_post,
)

// update Useritems
router.patch(
  '/users/:id',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  userController.user_patch,
)

// Delete Useritems.
router.delete('/users/:id', userController.user_delete)

module.exports = router
