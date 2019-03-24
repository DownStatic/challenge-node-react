import React from 'react';
import { connect } from 'react-redux'

class StudentDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {students:[]};
  }

  componentDidMount() {
    fetch('http://localhost:3000/students')
    .then(res => res.json())
    .then(results => {
      this.setState({students: results})
    })
  }

  addSuffix(grade){
    switch(grade) {
      case "1":
        return "1st"
      case "2":
        return "2nd"
      case "3":
        return "3rd"
      default:
        return `${grade}th`
    }
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          <table className="table table-striped table-responsive table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Grade</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
            {this.state.students.map(student => {
              return(
                <tr key={student._id}>
                  <td>{student.firstname + " " + student.surname}</td>
                  <td>{student.age}</td>
                  <td>{this.addSuffix(student.grade)}</td>
                  <td>{student.email}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(StudentDisplay);
