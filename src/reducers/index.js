import { combineReducers } from 'redux';
import addPostReducer from './add-post-reducer';
import upvotePostReducer from './upvote-reducer';

const rootReducer = combineReducers({
  postList: addPostReducer,
  upvotePost: upvotePostReducer,
});

export default rootReducer;
