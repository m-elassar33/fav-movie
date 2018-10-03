import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterMovies } from '../../actions/movieActions';
import { logout } from '../../actions/authActions';

class Header extends Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    e.preventDefault();
    this.setState({ term: e.target.value });
    this.props.filterMovies(e.target.value);
  };

  onClick = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { isAuthenticated } = this.props;

    const authLinks = (
      <li className="nav-item">
        <a href="" onClick={this.onClick} className="nav-link">
          Logout
        </a>
      </li>
    );

    const guestLinks = (
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          FavMovie
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              type="text"
              className="form-control mr-sm-2 font-awesome"
              placeholder="&#xf002; Search for a movie, tv show, person..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </form>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  filterMovies: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { filterMovies, logout }
)(Header);
