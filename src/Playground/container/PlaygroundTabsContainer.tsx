import { connect } from 'react-redux';

import {
    PlaygroundTabs
} from '../presentation/PlaygroundTabs';

import { PlaygroundTabsActions } from '../actions';

const mapStateToProps = (state: any) => ({
    value: state.playground.playgroundTabs.value
});

const mapDispatchToProps = {
    onChange: PlaygroundTabsActions.changeTab
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlaygroundTabs);
