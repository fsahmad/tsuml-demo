import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PlaygroundTabsContainer from './Playground/container/PlaygroundTabsContainer';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>TypeScript UML Playground (Under Construction)</h2>
          </div>
          <div className="App-body">
            <PlaygroundTabsContainer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
