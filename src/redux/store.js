import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import generateId from '../redux/middleware/generateid';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer/reducer';

const enchaser = applyMiddleware(
    thunk,
    generateId,
  );

export default createStore(reducer, composeWithDevTools(enchaser));
