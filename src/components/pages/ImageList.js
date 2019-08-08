import React from 'react';
import { connect } from 'react-redux';
import { Icon, Header, Divider, Message } from 'semantic-ui-react'

import SearchBar from '../SearchBar';
import { fetchImages } from '../../actions';
import ImageView from '../ImageView';
import '../imageView.css';

class StreamList extends React.Component {

    onSubmit = formValues => {
        this.props.fetchImages(formValues);
    }

    renderList() {
        const { val } = this.props;
        if (!val) {
            return null;
        }
        if (val.results.length === 0) {
            return (
                <Message negative>
                    <Message.Header textAlign='center'>No images found</Message.Header>
                </Message>
            );
        }
        else {
            return val.results.map(post => {
                return (
                    <ImageView image={post} key={post.id} />
                );
            });
        }
    }

    render() {
        return (

            <div className="ui container" style={{ marginTop: '20px' }}>
                <Divider horizontal>
                    <Header as='h3'>
                        <Icon name='image' />
                        Search for images
                    </Header>
                </Divider>
                <SearchBar onSubmit={this.onSubmit} />
                <div className="image-list">{this.renderList()}</div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { val: state.image }
};


export default connect(() => (mapStateToProps), {
    fetchImages: fetchImages
}
)(StreamList);