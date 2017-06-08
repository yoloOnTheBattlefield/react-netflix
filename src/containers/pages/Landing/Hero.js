import React from 'react';
import { Hero, Container, Header, Panel, BottomPanel, Line } from './Hero.styles';

/*
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 6;
*/

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showHeader : false,
      showPanel: false,
      showLine: false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        showHeader: true
      })
    }, 1500);
    setTimeout(() => {
      this.setState({
        showPanel: true
      })
    }, 1000);
    setTimeout(() => {
      this.setState({
        showLine: true
      })
    }, 3500);
  }

  render(){
    return (
      <Hero>
        <Container>
          <Panel top showPanel={this.state.showPanel} />
          <Header showHeader={this.state.showHeader}>MOVIESTACK</Header>
          <BottomPanel bottom showPanel={this.state.showPanel} />
          <Line showLine={this.state.showLine}>
            <span></span>
          </Line>
        </Container>
      </Hero>
    )
  }
}
