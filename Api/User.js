const express = require('express');
const User = require('../DB/User');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: 'Error in fetching user' });
  }
});

router.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmPassword,
  } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.phoneNumber = phoneNumber;
  user.password = password;
  user.confirmPassword = confirmPassword;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

module.exports = router;
