import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Welcome to the student record system!</h3>
                <p>View the student roster above. Records can be edited from the roster screen. To register a new student, please use the registration form linked above.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Home);
