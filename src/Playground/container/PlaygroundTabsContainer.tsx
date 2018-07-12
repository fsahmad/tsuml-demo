import { connect } from 'react-redux';

import {
    PlaygroundTabs
} from '../presentation/PlaygroundTabs';

import {
    diagramUrl,
    generateDiagram,
} from '../../logic/index';

import { PlaygroundTabsActions } from '../actions';

const mapStateToProps = (state: any) => {
    let diagramSource = '';
    let diagramImage = '';
    try {
        if (state.playground.playgroundTabs.code) {
            diagramSource = generateDiagram(state.playground.playgroundTabs.code);
            diagramImage = diagramUrl(diagramSource);
        }
    } catch (e) {
        // Catch any error
    }
    return {
        value: state.playground.playgroundTabs.value,
        diagramSource: diagramSource,
        diagramImage: diagramImage,
    };
};

const mapDispatchToProps = {
    onChange: PlaygroundTabsActions.changeTab,
    onCodeChange: PlaygroundTabsActions.updateCode,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlaygroundTabs);
