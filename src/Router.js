import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MinionList from './components/MinionList';
import MinionCreate from './components/MinionCreate';
import MinionEdit from './components/MinionEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please login" initial />
            </Scene>

            <Scene key="main">
                <Scene
                  onRight={() => Actions.minionCreate({ type: 'reset' })}
                  rightTitle="Add"
                  key="minionList"
                  component={MinionList}
                  title="Minions"
                  initial
                />
                <Scene key="minionCreate" component={MinionCreate} title="Create Minion" />
                <Scene key="minionEdit" component={MinionEdit} title="Edit Minion" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
