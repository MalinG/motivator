import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { minionsFetch } from '../actions';
import ListItem from './ListItem';

class MinionList extends Component {

  componentWillMount() {
    this.props.minionsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be redered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ minions }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(minions);
  }

  renderRow(minion) {
    return <ListItem minion={minion} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
    console.log(state);
  const minions = _.map(state.minions, (val, uid) => {
    return { ...val, uid };
  });

  return { minions };
};

export default connect(mapStateToProps, { minionsFetch })(MinionList);
