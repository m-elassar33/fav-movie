import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Movie from './Movie';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies, clearMovies } from '../../actions/movieActions';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  loadMovies = () => {
    this.props.getMovies(this.state.page);
    this.setState({ page: this.state.page + 1 });
  };

  componentDidMount() {
    this.loadMovies();
  }

  componentWillUnmount() {
    this.props.clearMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="row">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
        <Waypoint onEnter={this.loadMovies} />
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  getMovies: PropTypes.func.isRequired,
  clearMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movie.displayedMovies
});

export default connect(
  mapStateToProps,
  { getMovies, clearMovies }
)(Movies);
