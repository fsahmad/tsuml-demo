import { PlaygroundTabsValues } from '../presentation/PlaygroundTabs';
import { PlaygroundTabsActions } from '../actions';
import {
    diagramUrl, 
    generateDiagram,
 } from '../../logic/index';

function playgroundTabs(
    state: any = {
        value: PlaygroundTabsValues.TAB_CODE,
        code: '',
        diagramSource: '',
        diagramImage: '',
    },
    action: any
) {
    switch (action.type) {
        case PlaygroundTabsActions.CHANGE_TAB:
            return { ...state, value: action.value };
        case PlaygroundTabsActions.CODE_UPDATE:
            const diagramSource = generateDiagram(action.code);
            const diagramImage = diagramUrl(diagramSource);
            return { ...state, code: action.code, diagramSource, diagramImage };
        default:
            return state;
    }
}

export default playgroundTabs;
