import React, { Component } from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies } from '../../actions/movieActions';

class Movies extends Component {
  state = {
    page: 1
  };

  onScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.props.getMovies(this.state.page);
      this.setState({ page: this.state.page + 1 });
    }
  };

  componentDidMount() {
    this.props.getMovies(this.state.page);
    this.setState({ page: this.state.page + 1 });
    window.addEventListener('scroll', this.onScroll, false);
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="row">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
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
