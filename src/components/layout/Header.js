import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              FavMovie
            </Link>
          </div>
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
      </nav>
    );
  }
}
