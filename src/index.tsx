import * as React from 'react';
import {
  createStore,
  compose,
} from 'redux';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

// tslint:disable-next-line:no-string-literal
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // tslint:disable-next-line:no-any
  (state: any) => state,
  composeEnhancers(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
