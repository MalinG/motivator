import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { minionUpdate } from '../actions';
import { CardSection, Input } from './common';

class MinionForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Enter name"
                        value={this.props.name}
                        onChangeText={value => this.props.minionUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Star goal"
                        placeholder="Enter number"
                        value={this.props.goal}
                        onChangeText={value => this.props.minionUpdate({ prop: 'goal', value })}
                    />
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
  const { name, goal } = state.minionForm;

  return { name, goal };
};

export default connect(mapStateToProps, { minionUpdate })(MinionForm);
