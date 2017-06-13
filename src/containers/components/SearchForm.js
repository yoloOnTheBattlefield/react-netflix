import React from 'react';
import { connect } from 'react-redux';
import { Form, Input } from './SearchForm.styles';
import { searchMovie } from '../../redux/actions/index';

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }

  handleChange(e){
    const data = e.target.value;
    this.setState({
      query: data
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let { query } = this.state;
    query = query.toLowerCase().split(' ').join('%20')
    this.props.searchMovie(query);
    this.setState({
      query: ''
    })
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Input onChange={this.handleChange.bind(this)} value={this.state.query} />
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: (movie) => {
      dispatch(searchMovie(movie))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchForm);
