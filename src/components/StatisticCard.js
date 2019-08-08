import React from 'react';
import { connect } from 'react-redux';
import { Icon, Image, Statistic } from 'semantic-ui-react'

import { fetchStats } from '../actions';

class StatisticCard extends React.Component {

    componentDidMount() {
        this.props.fetchStats();
    }

    renderList() {
        const { val } = this.props;
        return (
            <Statistic.Group widths='three'>
                <Statistic>
                    <Statistic.Value>{val.downloads.total}</Statistic.Value>
                    <Statistic.Label>Downloads</Statistic.Label>
                </Statistic>

                <Statistic>
                    <Statistic.Value>{val.views.total}</Statistic.Value>
                    <Statistic.Label>views</Statistic.Label>
                </Statistic>

                <Statistic>
                    <Statistic.Value>
                        <Icon name='like' />
                        {val.likes.total}
                    </Statistic.Value>
                    <Statistic.Label>likes</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        );

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

    return { val: state.stats }
};

export default connect(mapStateToProps, {
    fetchStats: fetchStats
})(StatisticCard);
