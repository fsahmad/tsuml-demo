import { PlaygroundTabsValues } from '../presentation/PlaygroundTabs';
import { PlaygroundTabsActions } from '../actions';

function playgroundTabs(
    state: any = {
        value: PlaygroundTabsValues.TAB_CODE,
        code: '',
        selectedSample: null,
    },
    action: any
) {
    switch (action.type) {
        case PlaygroundTabsActions.CHANGE_TAB:
            return { ...state, value: action.value };
        case PlaygroundTabsActions.CODE_UPDATE:
            return {
                ...state,
                selectedSample: null,
                code: action.code,
            };
        case PlaygroundTabsActions.REQUEST_SAMPLE_FETCH:
            if (action.sample === null) {
                return { ...state, selectedSample: null, code: '' };
            } else {
                return { ...state, selectedSample: action.sample };
            }
        case PlaygroundTabsActions.SUCCESS_SAMPLE_FETCH:
            return { ...state, code: action.content };
        default:
            return state;
    }
}

export default playgroundTabs;
