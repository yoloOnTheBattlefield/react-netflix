import React from 'react';
import Waypoint from 'react-waypoint';
import { Container, MovieList, Header } from '../Pages.styles';
import MovieCard from '../../components/MovieCard';
import Loader from '../../components/Loader';


class MoviesContainer extends React.Component {
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
    });
  }

  handleEnter(){
    this.setState({
      headerTouched: false
    });
  }

  render(){

    if(!this.props.movies){
      return (
        <Container>
          <Loader />
        </Container>
      )
    }

    const { headerTouched } = this.state;
    const { movies, title } = this.props;

    return (
      <Container>
        <Waypoint onLeave={this.handleExit} onEnter={this.handleEnter} topOffset={80} >
          <div>
            <Header touched={headerTouched} >
              <h1>{title.toUpperCase()}</h1>
            </Header>
          </div>
        </Waypoint>
        <MovieList touched={headerTouched}>
          {
            movies.map(movie => {
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
      </Container>
    )
  }
}


export default MoviesContainer;
