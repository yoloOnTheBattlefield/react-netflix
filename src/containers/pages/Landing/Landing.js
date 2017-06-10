import React from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies } from '../../../redux/actions';
import MoviesContainer from './MoviesContainer';
import Hero from './Hero';

import { Content } from '../Pages.styles';

class Landing extends React.Component{

  componentDidMount(){
    this.props.fetchUpcomingMovies();
  }

  render(){
    const { upcomingMovies } = this.props.upcomingMovies;
    return(
      <Content>
        <Hero />
        <MoviesContainer title={'Upcoming'} movies={upcomingMovies}/>
      </Content>
    )
  }
}

const mapStateToProps = ({ upcomingMovies }) => {
  return {
    upcomingMovies
  }
}

export default connect(mapStateToProps, { fetchUpcomingMovies })(Landing);
