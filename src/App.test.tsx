import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import App from './App';
import PlaygroundReducer from './Playground/reducer';

const reducer = combineReducers({
  playground: PlaygroundReducer,
});

const store = createStore(
  // tslint:disable-next-line:no-any
  reducer,
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
