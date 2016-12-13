import React, { Component } from 'react';
import { connect } from 'react-redux';
import { minionUpdate, minionCreate, minionCancel } from '../actions';
import { Card, CardSection, Button } from './common';
import MinionForm from './MinionForm';


class MinionCreate extends Component {
    onButtonPress() {
        const { name, goal } = this.props;

        this.props.minionCreate({ name, goal });
    }

    onCancel() {
        this.props.minionCancel();
    }

    render() {
        console.log(this.props);
        return (
            <Card>
                <MinionForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onCancel.bind(this)}>
                        Cancel
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, goal } = state.minionForm;

    return { name, goal };
};

export default connect(mapStateToProps, {
    minionUpdate, minionCreate, minionCancel
})(MinionCreate);
