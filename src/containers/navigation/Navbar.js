import React from 'react';
import FontAwesome from 'react-fontawesome';

import { Nav, Form, Input, SignIn, Button, SearchIcon } from './Navbar.styles';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showSearch: false,
      showButtons: false,
      showInput: false
    };
    this.showInput = this.showInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  showInput(){
    this.setState({
      showInput: true
    })
  }

  onSubmit(){
    this.setState({
      showInput: false
    })
  }

  onBlur(){
    this.setState({
      showInput: false
    })
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        showSearch: true
      })
    }, 1500)
    setTimeout(() => {
      this.setState({
        showButtons: true
      })
    }, 2000)
  }

  render(){
    return (
      <Nav>
        <Button showButtons={this.state.showButtons}>Browse</Button>
        <Form onSubmit={this.onSubmit} onBlur={this.onBlur}>
          <SearchIcon onClick={this.showInput} showSearch={this.state.showSearch} >
            <FontAwesome name='search' />
          </SearchIcon>
          <Input showInput={this.state.showInput} placeholder='SEARCH YOUR NEW ADVENTURE' />
        </Form>
        <SignIn showButtons={this.state.showButtons}>SIGN IN</SignIn>
      </Nav>
    )
  }
}

export default Navbar;
