import React, { Component } from 'react'
import { connect } from 'react-redux'

const createStudent = 'http://localhost:3000/students'

class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '', surname: '', email: '', age: '', grade: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(createStudent, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(parse => console.log(parse))
  }

  getStudents(){
    fetch(createStudent)
    .then(res => res.json())
    .then(parse => console.log(parse))
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          <div className="panel-body">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <legend>Create a Student Record</legend>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" placeholder="Jane" className="form-control" autoFocus value={this.state.firstname} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="surname">Last Name</label>
                <input type="text" name="surname" id="surname" placeholder="Doe" className="form-control" value={this.state.lastname} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" placeholder="jane.doe@email.com" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" className="form-control" value={this.state.age} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="grade">Grade</label>
                <input type="number" name="grade" id="grade" className="form-control" value={this.state.grade} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">Create Student</button>
              </div>
            </form>
          </div>
        </div>
        <div className="panel">
          <button className="btn" onClick={this.getStudents}>Get Students</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(NewStudent);
