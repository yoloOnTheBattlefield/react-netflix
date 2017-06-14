import React from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../../redux/actions/index';
import { Content } from '../Pages.styles';


class Movie extends React.Component {
  componentDidMount(){
    this.props.getMovie(this.props.match.params.id)
  }
  render(){
    const { movie } = this.props;
    if(!movie){
      return <h1>Loading... </h1>
    }
    return(
      <Content>
        <h1>{ movie.title }</h1>
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
