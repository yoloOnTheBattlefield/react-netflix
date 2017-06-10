import React from 'react';
import { Hero, HeroContainer, Header } from './Hero.styles';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showHeader : false
    }
  }

  componentDidMount(){
    setTimeout(() => this.setState({ showHeader: true }), 1000);
  }

  render(){
    const { showHeader } = this.state;
    return (
      <Hero>
        <HeroContainer>
          <Header showHeader={showHeader}>MOVIESTACK</Header>
        </HeroContainer>
      </Hero>
    )
  }
}
