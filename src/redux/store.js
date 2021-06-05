import rootReducer from './reducers';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));


export default store;