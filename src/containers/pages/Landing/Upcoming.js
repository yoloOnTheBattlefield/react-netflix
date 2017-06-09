import React from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import { fetchUpcomingMovies } from '../../../redux/actions';


import { FullPage, MovieList, Header } from '../Pages.styles';
import MovieCard from '../../components/MovieCard'


class Upcoming extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headerTouched: false
    }
    this.handleExit = this.handleExit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleExit(){
    this.setState({
      headerTouched: true
    })
  }

  handleEnter(){
    this.setState({
      headerTouched: false
    })
  }

  componentDidMount(){
    this.props.fetchUpcomingMovies();
  }
  render(){
    const { popularMovies } = this.props.popularMovies;

    return (
      <FullPage>
        <Waypoint onLeave={this.handleExit} onEnter={this.handleEnter} topOffset={80} >
          <div>
            <Header touched={this.state.headerTouched} >
              <h1>UPCOMING</h1>
            </Header>
        </div>
        </Waypoint>
        <MovieList touched={this.state.headerTouched}>
          {
            !popularMovies ?
            null :
            popularMovies.map(movie => {
             return (
              <MovieCard
                key={movie.title}
                title={movie.title}
                poster={movie.poster_path}
                overview={movie.overview}
                released={movie.release_date}
              />
            )
            })
          }
        </MovieList>
      </FullPage>
    )
  }
}


const mapStateToProps = ({ popularMovies }) => {
  return {
    popularMovies
  }
}

export default connect(mapStateToProps, { fetchUpcomingMovies })(Upcoming);
