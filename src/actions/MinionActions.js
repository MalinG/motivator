import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  MINION_UPDATE,
  MINION_CREATE,
  MINIONS_FETCH_SUCCESS,
  MINION_SAVE_SUCCESS,
  MINION_CANCEL
} from './types';

export const minionUpdate = ({ prop, value }) => {
  return {
    type: MINION_UPDATE,
    payload: { prop, value }
  };
};


export const minionCreate = ({ name, goal }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/minions`)
            .push({ name, goal })
            .then(() => {
                dispatch({ type: MINION_CREATE });
                Actions.minionList({ type: 'reset' });
            });
    };
};

export const minionsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/minions`)
            .on('value', snapshot => {
                dispatch({ type: MINIONS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const minionSave = ({ name, goal, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/minions/${uid}`)
            .set({ name, goal })
            .then(() => {
                dispatch({ type: MINION_SAVE_SUCCESS });
                Actions.minionList({ type: 'reset' });
            });
    };
};

export const minionCancel = () => {
    return (dispatch) => {
        dispatch({ type: MINION_CANCEL });
        Actions.minionList({ type: 'reset' });
    };
};

export const minionDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/minions/${uid}`)
            .remove()
            .then(() => {
                Actions.minionList({ type: 'reset' });
            });
    };
};
