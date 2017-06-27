import React from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies, fetchTheaterMovies } from '../../../redux/actions';
import Hero from './Hero';
import MoviesContainer from './MoviesContainer';
import _values from 'lodash/values';

import { Content } from '../Pages.styles';

class Landing extends React.Component{

  componentDidMount(){
    this.props.fetchUpcomingMovies();
    this.props.fetchTheaterMovies();
  }

  render(){
    const collections = _values(this.props.collections, selectedMovie);
    const { selectedMovie, showModal } = this.props;
    return(
      <Content>
        {/*<Hero />*/}
        <MoviesContainer collections={collections} />
      </Content>
    )
  }
}
const mapStateToProps = ({ collections, selectedMovie }) => ({
  selectedMovie: selectedMovie.movie,
  showModal: selectedMovie.showModal,
  collections
});

export default connect(mapStateToProps, {
  fetchUpcomingMovies,
  fetchTheaterMovies
})(Landing);
