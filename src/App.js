import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: 'AIzaSyAlAIid89UO3zjqOGeyl28xefopru4QFSU',
            authDomain: 'motivator-ad324.firebaseapp.com',
            databaseURL: 'https://motivator-ad324.firebaseio.com',
            storageBucket: 'motivator-ad324.appspot.com',
            messagingSenderId: '210945868395'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            //<Text>test</Text>
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
