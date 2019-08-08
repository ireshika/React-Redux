import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import { Container, Segment, Header, Divider } from 'semantic-ui-react';

import StreamForm from './Form';
import GoogleAuth from '../GoogleAuth';

class Login extends React.Component {

  onSubmit = formValues => {
    //console.log(formValues.title);
    //todo always send userID 1
    var response = this.props.fetchUser(1);
    console.log(response)


  };

  render() {
    return (
      <div>
        <Container text textAlign="center">
          <Divider section hidden />
          <Divider section hidden />
          <Segment>
            <Divider hidden />
            <Header as="h2"> Sign in</Header>
            <Divider hidden />
            <StreamForm onSubmit={this.onSubmit} />
            <Divider section hidden />
          </Segment>
          <Divider section hidden />
          <Divider section hidden />
          <Header as="h2"> ---------- OR SIGN IN WITH ----------</Header>
          <Divider section hidden />
          <GoogleAuth />
        </Container>
      </div>

    );

  }
}

const mapStateToProps = (state) => {
  return { isLoading: state.user.isLoading };
}

export default connect(
  mapStateToProps, { fetchUser }
)(Login);