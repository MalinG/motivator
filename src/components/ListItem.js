import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onRowPress() {
        Actions.minionEdit({
            minion: this.props.minion,
            type: 'reset'
        });
    }

    render() {
        const { name } = this.props.minion;
        let avatar = '';

        switch (name) {
            case 'Iris':
                avatar = require('../images/Iris.jpg');
                break;
            case 'Lucy':
                avatar = require('../images/Lucy.jpg');
                break;
            default:
                avatar = require('../images/test.jpg');
        }

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                    <Image
                        source={avatar}
                        style={styles.imageStyle}
                    />
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10
    },

    imageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        paddingLeft: 15
    }
};

export default ListItem;
