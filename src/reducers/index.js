import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: taskReducer,
});

export default rootReducer;
