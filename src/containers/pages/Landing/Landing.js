import React from 'react';
import Upcoming from './Upcoming';
import Hero from './Hero';

import { Content } from '../Pages.styles';

class Landing extends React.Component{
  render(){
    return(
      <Content>
        <Hero />
        <Upcoming />
      </Content>
    )
  }
}

export default Landing;
