import React from 'react';
import { connect } from 'react-redux';
import { clickedMovie } from '../../redux/actions/index';

import { Card } from './Card.styles';

class MovieCard extends React.Component {

  render(){
    const { poster_path } = this.props.movie;
    const { clickedMovie } = this.props;
    return(
      <Card
        poster={`https://image.tmdb.org/t/p/w300${poster_path}`}
        onClick={() => clickedMovie(this.props.movie, true)}
        cursor='pointer'
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  clickedMovie: (movie, showModal) => {
    dispatch(clickedMovie(movie, showModal))
  }
});

export default connect(null, mapDispatchToProps)(MovieCard);
