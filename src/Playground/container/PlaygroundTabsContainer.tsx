import { connect } from 'react-redux';

import {
    PlaygroundTabs
} from '../presentation/PlaygroundTabs';

import { PlaygroundTabsActions } from '../actions';

const mapStateToProps = (state: any) => ({
    value: state.playground.playgroundTabs.value,
    // code: state.playground.playgroundTabs.code,
    diagramSource: state.playground.playgroundTabs.diagramSource,
    diagramImage: state.playground.playgroundTabs.diagramImage,
});

const mapDispatchToProps = {
    onChange: PlaygroundTabsActions.changeTab,
    onCodeChange: PlaygroundTabsActions.updateCode,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlaygroundTabs);
