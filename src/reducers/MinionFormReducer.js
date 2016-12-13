import {
  MINION_UPDATE,
  MINION_CREATE,
  MINION_SAVE_SUCCESS,
  MINION_CANCEL
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  goal: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MINION_UPDATE:
        // action.payload === { prop: 'name', value: 'jane'}
        // key interpelation
            return { ...state, [action.payload.prop]: action.payload.value };
        case MINION_CREATE:
            return INITIAL_STATE;
        case MINION_SAVE_SUCCESS:
            return INITIAL_STATE;
        case MINION_CANCEL:
            return INITIAL_STATE;
        default:
            return state;
    }
};
