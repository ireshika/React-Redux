import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image, Feed, Header, Divider } from 'semantic-ui-react'

import ImageCard from './ImageCard';
import FeedCard from './FeedCard';
import StatisticCard from '../StatisticCard';
import TagView from '../TagView';
import { fetchUser } from '../../actions';
import './streamShow.css';

class StreamShow extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  renderList() {
    const { val } = this.props;

    return val.photos.map(post => {
      return (
        <ImageCard image={post} key={post.id} />
      );
    });
  }

  render() {

    const { description, val } = this.props;
    if (!val) {
      return null;
    }
    return (
      <div id="colorlib-page">
        <div className="divInStyle">
          <Card >
            <Image src={val.profile_image.large} ref={this.imageRef} alt={description} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{val.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{`Instagram: ${val.instagram_username}`}</span>
              </Card.Meta>
              <Card.Description>
                {`${val.first_name} is a musician lives in ${val.location}`}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {`${val.followers_count} Followers`}
              </a>
            </Card.Content>
            <Card.Content>
              <Card.Content>
                <Card.Header>Recent Activity</Card.Header>
              </Card.Content>
              <Feed>
                <FeedCard />
              </Feed>
            </Card.Content>
          </Card>
        </div>
        <div className="out">
          <Divider horizontal>
            <Header as='h1'>
              <Icon name='image' />
              Gallery
            </Header>
          </Divider>
          <Card.Group itemsPerRow={3} >
            {this.renderList()}</Card.Group>
          {' '}
          <Divider horizontal>
            <Header as='h1'>
              <Icon name='bar chart' />
              Statistics
            </Header>
          </Divider>
          <StatisticCard />
          {' '}
          <Divider horizontal>
            <Header as='h1'>
              <Icon name='tag' />
              Tags
            </Header>
          </Divider>
          <TagView taggedItems={val.tags} key={val.id} />
        </div>
      </div >
    )
  };

}

const mapStateToProps = (state) => {
  return { val: state.user }
};

export default connect(mapStateToProps, {
  fetchUser: fetchUser
})(StreamShow);