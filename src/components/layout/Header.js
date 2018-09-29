import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="navbar-header">
            <Link to="/" className="navbar-brand">
              FavMovie
            </Link>
          </div>
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </form>
        </div>
      </nav>
    );
  }
}
