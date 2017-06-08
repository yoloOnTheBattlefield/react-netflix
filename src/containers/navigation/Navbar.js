import React from 'react';

import { Nav, Form, Input, SignIn, Button } from './Navbar.styles';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showNavbar: false,
      showButtons: false
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        showNavbar: true
      })
    }, 2500)
    setTimeout(() => {
      this.setState({
        showButtons: true
      })
    }, 3000)
  }

  render(){
    return (
      <Nav showNavbar={this.state.showNavbar}>
        <Button showButtons={this.state.showButtons}>Browse</Button>
        <Form>
          <Input placeholder='SEARCH YOUR NEW ADVENTURE' />
        </Form>
        <SignIn showButtons={this.state.showButtons}>SIGN IN</SignIn>
      </Nav>
    )
  }
}

export default Navbar;
