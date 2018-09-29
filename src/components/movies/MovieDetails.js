import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie } from '../../actions/movieActions';

class MovieDetails extends Component {
  state = {
    poster_path: '',
    title: '',
    release_date: '',
    overview: ''
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { poster_path, title, release_date, overview } = nextProps.movie;
    this.setState({
      poster_path,
      title,
      release_date,
      overview
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id);
  }

  render() {
    const { poster_path, title, release_date, overview } = this.props.movie;

    return (
      <div className="card">
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
              <p className="card-text">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie.movie
});

export default connect(
  mapStateToProps,
  { getMovie }
)(MovieDetails);
