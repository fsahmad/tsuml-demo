import * as React from 'react';
import {
  createStore,
  combineReducers,
  compose,
} from 'redux';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import App from './App';
import PlaygroundReducer from './Playground/reducer';
import './index.css';

const reducer = combineReducers({
  playground: PlaygroundReducer,
});

// tslint:disable-next-line:no-string-literal
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // tslint:disable-next-line:no-any
  reducer,
  composeEnhancers(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
