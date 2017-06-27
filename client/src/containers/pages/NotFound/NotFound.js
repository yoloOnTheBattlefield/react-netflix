import React from 'react';
import { Link } from 'react-router-dom';

import { Content } from '../Pages.styles';
import { Background, Header } from './NotFound.styles';

const SignIn = () => {
  return (
    <Content>
      <Background>
        <Header>
          FourOhFour
          <p>Page not found :(</p>
          <Link to='/'>Go Back Home</Link>
        </Header>
      </Background>
    </Content>
  )
}

export default SignIn;
