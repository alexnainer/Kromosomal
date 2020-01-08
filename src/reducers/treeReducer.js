import {
  ADD_FIRST_PERSON
} from '../actions/treeActions';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FIRST_PERSON:
      return action.data;
    
    default:
      return state;
  }
}
