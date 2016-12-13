import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MinionFormReducer from './MinionFormReducer';
import MinionReducer from './MinionReducer';

export default combineReducers({
  auth: AuthReducer,
  minionForm: MinionFormReducer,
  minions: MinionReducer
});
