import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import SearchForm from '../components/SearchForm';
import Hamburger from '../components/Hamburger';

import {
  Nav,
  NavInner,
  MenuPanel,
  MenuList
} from './Navbar.styles';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick = () => {
    this.setState({ open: this.state.open ? false : true });
  }

  render(){
    const { open } = this.state;
    const collections = _values(this.props.collections);
    console.log(collections)
    return (
      <Nav>
        <NavInner>
          <div
            style={{
              width: '70px',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Hamburger
              handleClick={this.handleClick}
              open={open} />
            </div>

        </NavInner>
        <MenuPanel
          open={open}>
          <SearchForm />
          <MenuList open={open}>
            {
              collections.map(title => {
                return <li key={title.type}>{title.type}</li>
              })
            }
          </MenuList>
        </MenuPanel>
      </Nav>
    )
  }
}

const mapStateToProps = ({ collections }) => ({ collections })


export default connect(mapStateToProps, null)(Navbar);
