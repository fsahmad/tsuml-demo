import { connect } from 'react-redux';

import TypeScriptTab, {
    StateProps,
    DispatchProps,
    OwnProps,
} from '../presentation/TypeScriptTab';

import { PlaygroundTabsActions } from '../actions';

const mapStateToProps = (state: any) => ({
    code: state.playground.playgroundTabs.code,
    selection: state.playground.playgroundTabs.selectedSample,
});

const mapDispatchToProps = {
    onSampleChange: PlaygroundTabsActions.selectSample,
    onCodeChange: PlaygroundTabsActions.updateCode,
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(TypeScriptTab);
