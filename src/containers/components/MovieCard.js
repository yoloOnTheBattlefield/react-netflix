import React from 'react';
import Modal from './Modal'
import { connect } from 'react-redux';
import { clickedMovie } from '../../redux/actions/index';

import { Card } from './MovieCard.styles';

class MovieCard extends React.Component {

  render(){
    const { poster_path} = this.props.movie;
    const { showModal, clickedMovieInfo, clickedMovie } = this.props;
    return(
      <div>
          <Card
            poster={`https://image.tmdb.org/t/p/w300${poster_path}`}
            onClick={() => clickedMovie(this.props.movie, true)}
          >
          </Card>
        {/**/}
        {
          clickedMovieInfo ?
          <Modal
            showModal={showModal}
            clickedMovieInfo={clickedMovieInfo}
            clickedMovie={clickedMovie}
          />
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  clickedMovieInfo: state.clickedMovie.movie,
  showModal: state.clickedMovie.showModal
})

const mapDispatchToProps = (dispatch) => {
  return{
    clickedMovie: (movie, showModal) => {
      dispatch(clickedMovie(movie, showModal))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
