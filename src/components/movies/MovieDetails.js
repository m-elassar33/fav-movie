import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie, setModal } from '../../actions/movieActions';

Modal.setAppElement('#root');

class MovieDetails extends Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    this.props.setModal(false);
    this.props.history.push(`/`);
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { modalIsOpen } = nextProps.movie;
    this.setState({
      modalIsOpen
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id);
  }

  render() {
    const {
      poster_path,
      title,
      release_date,
      overview,
      runtime,
      tagline,
      genres
    } = this.props.movie;

    return (
      <React.Fragment>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel={title}
        >
          <div className="row">
            <div className="col-md-4">
              <div className="thumbnail">
                <img
                  className="img-responsive"
                  src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
                  alt={title}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <h2>{`${title} (${new Date(release_date).getFullYear()})`}</h2>
                <p>
                  {genres
                    ? genres.map((genre, i, arr) => (
                        <span>
                          {genre.name}
                          {i !== arr.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    : null}
                </p>
              </div>
              <div>
                <h4>Overview</h4>
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </Modal>
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
              <img
                className="img-responsive"
                src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
                alt={title}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div>
              <h2>{`${title} (${new Date(release_date).getFullYear()})`}</h2>
              <p>
                {genres
                  ? genres.map((genre, i, arr) => (
                      <span>
                        {genre.name}
                        {i !== arr.length - 1 ? ', ' : ''}
                      </span>
                    ))
                  : null}
                <span>
                  <span className="text-muted"> | </span>
                  {runtime} minutes
                </span>
              </p>
            </div>
            {tagline ? (
              <div>
                <p>{tagline}</p>
              </div>
            ) : null}
            <div>
              <h4>Overview</h4>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie.movie
});

export default connect(
  mapStateToProps,
  { getMovie, setModal }
)(MovieDetails);
