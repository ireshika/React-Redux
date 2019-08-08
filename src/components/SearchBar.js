import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends React.Component {

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderInput = ({ input }) => {
    return (
      <div className="ui transparent icon input">
        <input type="text" {...input} placeholder="Search" />
        <i aria-hidden="true" className="search link icon"></i>
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form ">
        <Field name="input" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'searchBar'
})(SearchBar);