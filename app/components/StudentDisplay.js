import React from 'react';
import { connect } from 'react-redux'

const basePath = 'http://localhost:3000/students/'

class StudentDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students:[],
      selected:{},
      updated:{}
    };
    this.selectStudent = this.selectStudent.bind(this)
    this.updateStudent = this.updateStudent.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteStudent = this.deleteStudent.bind(this)
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

  selectStudent(event){
    let selectedStudent = this.state.students.find(student => student._id === event.target.dataset.id)
    this.setState({selected: selectedStudent, updated: selectedStudent})
  }

  handleChange(event){
    let key = event.target.name
    let val = event.target.value
    let change = {[key]: val}
    this.setState(currentState => {
      let newUpdate = Object.assign(currentState.updated, change)
      console.log(newUpdate)
      return Object.assign(currentState, {updated:newUpdate})
    })
  }

  updateStudent(){
    fetch(`${basePath + this.state.updated._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.updated)
    })
    .then(res => res.json())
    .then(parsed => console.log(parsed))
  }

  deleteStudent(event){
    let id = event.target.dataset.id
    fetch(`${basePath + id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(parsed => console.log(parsed))
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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
            {this.state.students.map(student => {
              if (this.state.selected !== student){
              return(
                <tr key={student._id}>
                  <td>{student.firstname + " " + student.surname}</td>
                  <td>{student.age}</td>
                  <td>{this.addSuffix(student.grade)}</td>
                  <td>{student.email}</td>
                  <td>
                    <button className="btn btn-primary" data-id={student._id} onClick={this.selectStudent}>Edit</button>
                    <button className="btn btn-danger" data-id={student._id} onClick={this.deleteStudent}>Delete</button>
                  </td>
                </tr>
              )}
              else{
                return(
                  <tr key={student._id}>
                    <td>
                      <input type="text" name="firstname" onChange={this.handleChange} value={this.state.updated.firstname}/>
                      <input type="text" name="surname" onChange={this.handleChange} value={this.state.updated.surname}/>
                    </td>
                    <td><input type="number" name="age" onChange={this.handleChange} value={this.state.updated.age}/></td>
                    <td><input type="number" name="grade" onChange={this.handleChange} value={this.state.updated.grade}/></td>
                    <td><input type="text" name="email" onChange={this.handleChange} value={this.state.updated.email}/></td>
                    <td>
                      <button className="btn btn-info" onClick={this.updateStudent}>Update</button>
                    </td>
                  </tr>
                )
              }
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
