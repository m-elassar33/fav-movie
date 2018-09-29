import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterMovies } from '../../actions/movieActions';

class Header extends Component {
  onInputChange = e => {
    e.preventDefault();
    this.props.filterMovies(e.target.value);
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              FavMovie
            </Link>
          </div>
          <div className="navbar-left">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={this.onInputChange}
            />
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  filterMovies: PropTypes.func.isRequired
};

export default connect(
  null,
  { filterMovies }
)(Header);
