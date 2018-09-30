import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setModal } from '../../actions/movieActions';
import { withRouter } from 'react-router-dom';

class Movie extends Component {
  onClick = id => {
    this.props.setModal(true);
    this.props.history.push(`/${id}`);
  };

  render() {
    const { id, poster_path, title, release_date, overview } = this.props.movie;

    return (
      <div className="card h-100" onClick={this.onClick.bind(this, id)}>
        <div className="row">
          <div className="col-md-5">
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
              alt={title}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{release_date}</h6>
              <p className="card-text">
                {overview.length > 216
                  ? overview.substring(0, 216) + '...'
                  : overview}
              </p>
            </div>
            <div className="card-footer bg-white">
              <Link onClick={e => e.stopPropagation()} to={`/${id}`}>
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired
};

export default compose(
  withRouter,
  connect(
    null,
    { setModal }
  )
)(Movie);
