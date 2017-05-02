import { PlaygroundTabsValues } from '../presentation/PlaygroundTabs';
import { PlaygroundTabsActions } from '../actions';

function playgroundTabs(
    state: any = {
        value: PlaygroundTabsValues.TAB_CODE
    },
    action: any
) {
    switch (action.type) {
        case PlaygroundTabsActions.CHANGE_TAB:
            return { ...state, value: action.value };
        default:
            return state;            
    }
}

export default playgroundTabs;
