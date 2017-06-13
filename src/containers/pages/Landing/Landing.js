import React from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies, fetchTheaterMovies } from '../../../redux/actions';
import Hero from './Hero';
import MoviesContainer from './MoviesContainer';
import values from 'lodash/values';

import { Content } from '../Pages.styles';

class Landing extends React.Component{

  componentDidMount(){
    this.props.fetchUpcomingMovies();
    this.props.fetchTheaterMovies();
  }

  render(){
    const collections = values(this.props.collections);
    return(
      <Content>
        <Hero />
        <MoviesContainer collections={collections} />
      </Content>
    )
  }
}

const mapStateToProps = ({ collections }) => {
  return {
    collections
  }
}

export default connect(mapStateToProps, {
  fetchUpcomingMovies,
  fetchTheaterMovies
})(Landing);
