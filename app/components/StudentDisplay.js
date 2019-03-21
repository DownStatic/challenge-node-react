import React from 'react';
import { connect } from 'react-redux'

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
            <form onSubmit={this.handleReset.bind(this)}>
              <legend>Reset Password</legend>
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input type="password" name="password" id="password" placeholder="New password" className="form-control" autoFocus value={this.state.password} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="confirm" placeholder="Confirm password" className="form-control" value={this.state.confirm} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">Change Password</button>
              </div>
            </form>
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