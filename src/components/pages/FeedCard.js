import React from 'react';
import { Feed } from 'semantic-ui-react'
import { connect } from 'react-redux';

import { fetchFeeds } from '../../actions';

class FeedCard extends React.Component {

  componentDidMount() {
    this.props.fetchFeeds();
  }

  renderList() {
    const { val } = this.props;
    return val.map(feed => {
      return (
        <Feed.Event key={feed.id}>
          <Feed.Label image={feed.user.profile_image.small} />
          <Feed.Content>
            <Feed.Date content={feed.created_at} />
            <Feed.Summary>
              You liked <a>{feed.user.username}</a> photo
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      );
    });
  }

  render() {
    const { val } = this.props;
    if (!val) {
      return null;
    }
    return (
      <div> {this.renderList()}</div>
    );

  }
}

const mapStateToProps = (state) => {

  return { val: state.feed }
};

export default connect(mapStateToProps, {
  fetchFeeds: fetchFeeds
})(FeedCard);