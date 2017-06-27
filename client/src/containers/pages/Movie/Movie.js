import React from 'react';
import Waypoint from 'react-waypoint';
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react';
import { getMovieById } from '../../../redux/actions/index';
import { Content } from '../Pages.styles';
import Loader from '../../components/Loader';
import {
  Container,
} from './Movie.styles';
import MovieHeader from './MovieHeader';
import MovieDescription from './MovieDescription';


class Movie extends React.Component {
  componentWillMount(){
    this.props.getMovieById(this.props.match.params.id)
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.props.getMovieById(this.props.match.params.id)
    }
  }
  render(){
    const { movie } = this.props;

    if(!movie){
      return (
        <Content>
          <Loader />
        </Content>
      )
    }

    return(
      <Content>
          <MovieHeader movie={movie} />
          <Container>
            <MovieDescription movie={movie} />
          </Container>
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  movie: state.getMovie.movie
});

const mapDispatchToProps = (dispatch) => ({
  getMovieById: (id) => dispatch(getMovieById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
