var request = require('request')
var Student = require('../models/Student')

exports.allStudents = (req, res, next) => {
  console.log("pulling student data")
  Student.find({}).then((students) => {
    console.log("student data found")
    res.send(students)
  })
}

exports.createStudent = (req, res, next) => {
  req.assert('firstname', 'First name is required').notEmpty();
  req.assert('surname', 'Surname is required').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  let errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }
  else {
    console.log("attempting to create student");
    let student = new Student({
      firstname: req.body.firstname,
      surname: req.body.surname,
      email: req.body.email,
      age: req.body.age,
      grade: req.body.grade
    });
    console.log("saving student");
    student.save()
    .then(res.send(student))
    .catch(err => {
      console.log(err)
    })
  }
}
