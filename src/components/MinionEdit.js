import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Communications from 'react-native-communications';
import MinionForm from './MinionForm';
import { minionUpdate, minionSave, minionDelete, minionCancel } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class MinionEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.minion, (value, prop) => {
      this.props.minionUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, goal } = this.props;

    this.props.minionSave({
        name, goal, uid: this.props.minion.uid
    });
  }

  onCancel() {
      this.props.minionCancel();
  }

  onDelete() {
      console.log('deleted');
      this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
      const { uid } = this.props.minion;

      this.props.minionDelete({ uid });
  }

  onDecline() {
      this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <MinionForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onCancel.bind(this)}>
            Cancel
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onDelete.bind(this)}>
            Delete Minion
          </Button>
        </CardSection>

        <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
        >
            Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, goal } = state.minionForm;

  return { name, goal };
};

export default connect(mapStateToProps, {
    minionUpdate, minionSave, minionDelete, minionCancel
})(MinionEdit);
