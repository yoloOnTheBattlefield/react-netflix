import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {
  updateInputValue,
  loadSuggestions,
  clearSuggestions
} from '../../redux/actions/index';

import './SearchForm.css';

class SearchForm extends React.Component{
  onSuggestionSelected(event, { suggestion, history }){
      event.preventDefault();
      const id = suggestion.id;
      this.props.history.push(`/movie/${id}`);
    }

    getSuggestionValue(suggestion) {
      return suggestion.title;
    }

    renderSuggestion(suggestion) {
      return (
        <span>{suggestion.title}</span>
      );
    }

    render() {
      const {
        value,
        suggestions,
        isLoading,
        onChange,
        onSuggestionsFetchRequested,
        onSuggestionsClearRequested
      } = this.props;

      const inputProps = {
        placeholder: "Type a movie name",
        value,
        onChange
      };

      return (
        <div style={{
            position: 'relative',
            left: 0,
            right: 0,
            margin: '0 auto',
            display: 'flex',
            width: '75%',
            height: 90
          }}>
            <FontAwesome className='search' name='search' />
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              onSuggestionSelected={this.onSuggestionSelected.bind(this)}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps} />
        </div>
      );
    }
  }


  function mapStateToProps(state) {
    const { value, suggestions, isLoading } = state.suggestions;
    return {
      value,
      suggestions,
      isLoading
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      onChange(event, { newValue }) {
        dispatch(updateInputValue(newValue));
      },
      onSuggestionsFetchRequested({ value }) {
        dispatch(loadSuggestions(value));
      },
      onSuggestionsClearRequested() {
        dispatch(clearSuggestions());
      }
    };
  }

  SearchForm.propTypes = {
    history: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired,
    }).isRequired,
  };

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm))
