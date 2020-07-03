import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducers from '../store/reducers';

const middleware = [thunk];

const configureStore = () => {
  const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  return store;
};

export default configureStore;
