import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import UserList from './pages/UserList';
import Home from './pages/Home';
import ImageList from './pages/ImageList';
import Header from './Header';
import history from '../history';
import { fetchUsers } from '../actions';

class App extends React.Component {

  onSubmit = formValues => {
    this.props.fetchUsers(formValues);
  };

  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header onSubmit={this.onSubmit} />
            <Route path="/" exact component={Home} />
            <Route path="/streams/users" exact component={UserList} />
            <Route path="/streams/home" exact component={Home} />
            <Route path="/streams/images" exact component={ImageList} />

          </div>
        </Router>
      </div>
    );
  }
}
export default connect(() => (null), {
  fetchUsers: fetchUsers
}
)(App);
