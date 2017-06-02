import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mui = (children: any) => {
    return <MuiThemeProvider>{children}</MuiThemeProvider>;
};

export default mui;
