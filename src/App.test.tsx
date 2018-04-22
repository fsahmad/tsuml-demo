import * as React from 'react';
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import App from './App';
import PlaygroundReducer from './Playground/reducer';

const reducer = combineReducers({
  playground: PlaygroundReducer,
});

// tslint:disable-next-line:no-string-literal
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // tslint:disable-next-line:no-any
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware
    )
  ),
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
