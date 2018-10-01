import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterMovies } from '../../actions/movieActions';

class Header extends Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    e.preventDefault();
    this.setState({ term: e.target.value });
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
              className="form-control font-awesome"
              placeholder="&#xf002; Search for a movie, tv show, person..."
              value={this.state.term}
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
