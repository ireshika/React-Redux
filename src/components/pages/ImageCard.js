import React from 'react';
import { Card } from 'semantic-ui-react'

class ImageCard extends React.Component {

    render() {
        const { urls } = this.props.image;
        return (
            <Card color='red' image={urls.full} />
        );
    }
}

export default ImageCard;