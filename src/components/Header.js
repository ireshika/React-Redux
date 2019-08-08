import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import GoogleAuth from './GoogleAuth';

class Header extends React.Component {

  onSubmit = formValues => {
    console.log(formValues);
    this.props.onSubmit(formValues);
  };

  renderInput = ({ input }) => {
    return (
      <div className="ui transparent icon input">
        <input type="text" {...input} placeholder="Username" />
        <i aria-hidden="true" className="search link icon"></i>
      </div>
    );
  };

  render() {
    return (
      <div className="ui top attached tabular menu">
        <Link to="/" className="item">
          Home
      </Link>
        <Link to="/streams/images" className="item">
          Photos
      </Link>
        <div className="right menu">
          <div className="item">
            <GoogleAuth />
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form ">
              <Field name="input" component={this.renderInput} />
            </form>
          </div>
        </div>
      </div>
    );

  }
}

export default reduxForm({
  form: 'simple'
})(Header);