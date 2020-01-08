import { combineReducers } from 'redux';
import treeReducer from './treeReducer';

export default combineReducers({
 tree: treeReducer,
});
