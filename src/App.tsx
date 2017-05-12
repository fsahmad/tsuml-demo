import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const MarkGithubIcon = require('mui-icons/octicons/mark-github').default;

import PlaygroundTabsContainer from './Playground/container/PlaygroundTabsContainer';
import './App.css';

class App extends React.Component<{}, null> {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title={'TypeScript UML Playground'}
            iconElementRight={(
              <IconButton onTouchTap={() => { window.open('https://github.com/fsahmad/typescript-uml'); }}>
                {React.createElement(MarkGithubIcon)}
              </IconButton>
            )}
          />
          <PlaygroundTabsContainer />
        </div>
      </MuiThemeProvider >
    );
  }
}

export default App;
