import React from 'react';
import Waypoint from 'react-waypoint';
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react';
import { getMovie } from '../../../redux/actions/index';
import { Content } from '../Pages.styles';
import Loader from '../../components/Loader';
import {
  Container,
} from './Movie.styles';
import MovieHeader from './MovieHeader';


class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state={
      alternate: false
    }
  }
  componentDidMount(){
    this.props.getMovie(this.props.match.params.id)
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
    console.log(movie)
    return(
      <Content>
          <MovieHeader movie={movie} alternate={this.state.alternate} />
          <Container>

          </Container>
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  movie: state.getMovie.movie
});

const mapDispatchToProps = (dispatch) => ({
  getMovie: (id) => dispatch(getMovie(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
