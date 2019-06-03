import { combineReducers } from 'redux';
import video from './video';
import comment from './comment';

const rootReducer = combineReducers({
  video,
  comment,
});

export default rootReducer;