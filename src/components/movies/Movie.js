import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  render() {
    const { poster_path, title, release_date, overview } = this.props.movie;

    return (
      <div className="card h-100">
        <div className="row">
          <div className="col-md-5">
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
              alt={title}
            />
          </div>
          <div className="col-md-7">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{release_date}</h6>
              <p class="card-text">
                {overview.length > 216
                  ? overview.substring(0, 216) + '...'
                  : overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
