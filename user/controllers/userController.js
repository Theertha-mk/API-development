const User = require('../models/usermodel')
const { validationResult } = require('express-validator')

// Display list of all Users.
exports.user_list = async (req, res) => {
  try {
    let users = await User.fetchAll()
    res.json({ status: true, users })
  } catch (error) {
    res.send(error)
  }
}

// Display Userdetails with specific id.
exports.user_id = async (req, res) => {
  try {
    let users = await User.where('id', parseInt(req.params.id)).fetch()
    res.json(users)
  } catch (error) {
    res.send(error)
  }
}

//add items
exports.user_post = async (req, res, next) => {
  const errors = validationResult(req)
  try {
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send('Invalid email address or password. Please try again.')
    }
    let users = await User.forge({ ...req.body }).save()
    res.json(users)
  } catch (error) {
    next(error)
  }
}

// update Useritems
exports.user_patch = async (req, res, next) => {
  const errors = validationResult(req)
  try {
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send('Invalid email address or password. Please try again.')
    }
    let users = await User.where('id', parseInt(req.params.id)).save(
      { ...req.body },
      { patch: true },
    )
    res.json(users)
  } catch (error) {
    next(error)
  }
}

//delete User items
exports.user_delete = async (req, res) => {
  try {
    let users = await User.where('id', parseInt(req.params.id)).destroy()
    res.json(users)
  } catch (error) {
    res.send(error)
  }
}
