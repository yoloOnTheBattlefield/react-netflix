import React from 'react';
import Waypoint from 'react-waypoint';
import AtvImg from 'react-atv-img';

import {
  Header,
  HeaderWrapper,
  Wrapper,
  Backdrop,
  Poster,
  Title,
  TitleAlternate,
  MovieTagline
} from './Movie.styles';

export default class MovieHeader extends React.Component{
  constructor(props){
    super(props);
    this.state={
      fixed: false,
      mounted: false,
      alternate: false
    }
  }

  componentDidMount(){
    setTimeout(
      () => this.setState({
      mounted: true
    }), 0)

  }

  render(){
    const { movie, alternate } = this.props;
    return (
      <Header>
        <Waypoint
          onEnter={() => this.setState({fixed: this.state.fixed ? false : true})}
          onLeave={() => this.setState({fixed: this.state.fixed ? false : true})}
          />
        <HeaderWrapper>
            <Backdrop
              backdrop={`https://image.tmdb.org/t/p/w1000${movie.backdrop_path}`} />
            <Wrapper>
                <Poster
                  mounted={this.state.mounted}
                  fixed={this.state.fixed}
                  >
                    <AtvImg layers={[`https://image.tmdb.org/t/p/w500${movie.poster_path}`]}style={{ width: 300, height: 400 }} />
                </Poster>
            </Wrapper>
        </HeaderWrapper>
      <MovieTagline mounted={this.state.mounted} alternate={alternate}>
        <Title alternate={alternate}>
            <h1>{movie.title}</h1>
          </Title>
          <TitleAlternate alternate={alternate}>
            <h1>{movie.tagline}</h1>
          </TitleAlternate>
          {/**/}
        </MovieTagline>
      </Header>
    )
  }
}

/*
onEnter={() => this.setState({ alternate: true }) }
onLeave={() => this.setState({ alternate: false }) }
*/
