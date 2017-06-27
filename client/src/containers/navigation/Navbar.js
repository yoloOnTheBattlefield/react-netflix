import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

import { Nav, Button } from './Navbar.styles';

class Navbar extends React.Component{
  render(){
    return (
      <Nav>
        <div style={{
            width: '100%',
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
        }}>
          <NavLink exact to='/'>
            <Button>BROWSE</Button>
          </NavLink>
          <SearchForm />
        </div>
      </Nav>
    )
  }
}

export default Navbar;
