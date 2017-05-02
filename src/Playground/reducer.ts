import { combineReducers } from 'redux';

import {default as playgroundTabs} from './reducer/PlaygroundTabsReducer';

const reducer = combineReducers({
    playgroundTabs
});

export default reducer;
