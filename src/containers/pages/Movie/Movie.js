import React from 'react';
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react';
import { getMovie } from '../../../redux/actions/index';
import { Content } from '../Pages.styles';
import Loader from '../../components/Loader';
import {
  Header,
  HeaderWrapper,
  Wrapper,
  Backdrop,
  Poster,
  Title,
  Container,
  MovieTagline
} from './Movie.styles';


class Movie extends React.Component {
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
        <Header>
          <HeaderWrapper>
            <Backdrop backdrop={`https://image.tmdb.org/t/p/w1000${movie.backdrop_path}`} />
            <Wrapper>
              <Poster poster={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />

            </Wrapper>
          </HeaderWrapper>
        </Header>
        <Container>
          <MovieTagline>
            <Title>
              <h1>{movie.title}</h1>
              <h3>{movie.tagline}</h3>
            </Title>
          </MovieTagline>
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
