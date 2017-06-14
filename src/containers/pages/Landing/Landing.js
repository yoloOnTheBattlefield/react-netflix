import React from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies, fetchTheaterMovies } from '../../../redux/actions';
import Hero from './Hero';
import MoviesContainer from './MoviesContainer';
import Modal from '../../components/Modal'
import values from 'lodash/values';

import { Content } from '../Pages.styles';

class Landing extends React.Component{

  componentDidMount(){
    this.props.fetchUpcomingMovies();
    this.props.fetchTheaterMovies();
  }

  render(){
    const collections = values(this.props.collections, clickedMovie);
    const { clickedMovie, showModal, match } = this.props;
    return(
      <Content>
        <Hero />
          <MoviesContainer collections={collections} />
          <Modal match={match} movie={clickedMovie} showModal={showModal} />
      </Content>
    )
  }
}
const mapStateToProps = ({ collections, clickedMovie }) => ({
  clickedMovie: clickedMovie.movie,
  showModal: clickedMovie.showModal,
  collections
});

export default connect(mapStateToProps, {
  fetchUpcomingMovies,
  fetchTheaterMovies
})(Landing);
