import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState={ tree: {} }) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}
