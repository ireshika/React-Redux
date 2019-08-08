import React from 'react';
import { Icon, Label, Divider, Header } from 'semantic-ui-react'

class TagView extends React.Component {

    renderCustomTags() {
        return this.props.taggedItems.custom.map(feed => {
            console.log(feed);
            return (
                <Label as='a'>{feed.title}</Label>
            );
        });
    }

    renderAggregatedTags() {
        return this.props.taggedItems.aggregated.map(feed => {
            console.log(feed);
            return (
                <Label as='a'>{feed.title}</Label>
            );
        });
    }

    render() {
        const { tag } = this.props.taggedItems;
        if (!this.props.taggedItems) {
            return null;
        }

        return (
            <div>
                <Divider horizontal>
                    <Header as='h5'>
                        <Icon name='camera retro' />
                        Custom Tags
                    </Header>
                </Divider>
                <Label.Group color='blue'>
                    {this.renderCustomTags()}
                </Label.Group>
                <Divider horizontal>
                    <Header as='h5'>
                        <Icon name='film' />
                        Aggregated Tags
                    </Header>
                </Divider>
                <Label.Group color='violet'>
                    {this.renderAggregatedTags()}
                </Label.Group>
            </div>
        );

    }
}
export default TagView;