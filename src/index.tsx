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
import * as ReactGA from 'react-ga';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Initialize google analytics
ReactGA.initialize('UA-101530055-1');

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
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware
    )
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
  () => {
    ReactGA.pageview(window.location.hash);
  }
);
