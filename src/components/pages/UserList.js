import React from 'react';
import { Image, List, Message, Icon, Header, Divider } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class StreamEdit extends React.Component {

  renderList() {
    const { val } = this.props;
    console.log(val.results);
    return val.results.map(resultUser => {
      return (
        <List.Item key={resultUser.id}>
          <Image avatar src={resultUser.profile_image.small} />
          <List.Content>
            <List.Header as='a'>{resultUser.name}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
  }


  render() {
    const { val } = this.props;
    console.log(val);
    if (!val) {
      return null;
    }

    if (val.results.length === 0) {
      return (
        <Message negative>
          <Message.Header textAlign='center'>No users found</Message.Header>
        </Message>
      );
    }
    else {
      return (
        <div>
          <Divider horizontal>
            <Header as='h3'>
              <Icon name='address book outline' />
              Found {val.results.length} Contacts
            </Header>
          </Divider>
          <List divided verticalAlign='middle'>
            {this.renderList()}
          </List>
        </div>
      );
    }
  }
}


const mapStateToProps = (state) => {
  return { val: state.userSearch }
};

export default connect(mapStateToProps, {
  fetchUsers: fetchUsers
})(StreamEdit);