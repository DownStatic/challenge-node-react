import React from 'react';
import { connect } from 'react-redux'

let student = {
  firstname: "Suzaku",
  surname: "Kururugi",
  email: "lancelot@brittania.gov",
  age: "17",
  grade: "11th"
}

class StudentDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', confirm: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleReset(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          <div className="panel-body">
            <p>Name: {student.firstname + " " + student.surname}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <p>Email: {student.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(StudentDisplay);
