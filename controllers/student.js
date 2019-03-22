var request = require('request')
var Student = require('../models/Student')

exports.createStudent = (req, res, next) => {
  req.assert('firstname', 'First name is required').notEmpty();
  req.assert('surname', 'Surname is required').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });
  console.log(req.sanitize('email').normalizeEmail({ remove_dots: false }));

  let errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }
}
