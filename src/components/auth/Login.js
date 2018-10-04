import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your FavMovie account</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(Login);
