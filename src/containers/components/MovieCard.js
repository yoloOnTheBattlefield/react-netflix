import React from 'react'
import _ from 'lodash';

import { Card } from './MovieCard.styles';

 class MovieCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cardHovered: false
    }
    this.cardHovered = this.cardHovered.bind(this);
    this.cardLeft = this.cardLeft.bind(this);
  }

  cardHovered(){
    this.setState({
      cardHovered: true
    });
  }

  cardLeft(){
    this.setState({
      cardHovered: false
    });
  }

  render(){
    const { title, poster, overview, released } = this.props;
    return(
      <Card
        poster={`https://image.tmdb.org/t/p/w300${poster}`}
        onMouseEnter={this.cardHovered}
        onMouseLeave={this.cardLeft}
      >

      </Card>
    )
  }
}

export default MovieCard;

// { _.truncate(overview, {
//   'length': 50
// }) }
