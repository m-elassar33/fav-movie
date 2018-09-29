import React, { Component } from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies } from '../../actions/movieActions';

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-md-4">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movie.displayedMovies
});

export default connect(
  mapStateToProps,
  { getMovies }
)(Movies);
