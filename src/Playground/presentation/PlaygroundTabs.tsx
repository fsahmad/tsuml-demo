import * as React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// Icons
import ActionCode from 'material-ui/svg-icons/action/code';
import ActionSubject from 'material-ui/svg-icons/action/subject';
import ImageImage from 'material-ui/svg-icons/image/image';

import CodeEditor from './CodeEditor';

const PlaygroundTabsValues = {
    TAB_CODE: 'code',
    TAB_DIAGRAM_SOURCE: 'diagramSource',
    TAB_DIAGRAM_IMAGE: 'diagramImage',
};

interface Props {
    value: any;
    onChange: (value: any) => void;
}

const styles = {
    container: {
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column' as 'column',
    },
    content: {
        flex: '1 1 auto',
        width: 'inherit',
        margin: '12px',
    },
    tabItemContainer: {
        flex: '0 0 auto',
    }
};

const PlaygroundTabs = (props: Props) => {
    let content = null;

    switch (props.value) {
        case PlaygroundTabsValues.TAB_CODE:
            content = <CodeEditor style={styles.content} />;
            break;
        case PlaygroundTabsValues.TAB_DIAGRAM_SOURCE:
            content = <div>Diagram Source</div>;
            break;
        case PlaygroundTabsValues.TAB_DIAGRAM_IMAGE:
            content = <div><img src="http://www.plantuml.com/plantuml/svg/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000" /></div>;
            break;
        default:
            break;
    }

    return (
        <div style={styles.container}>
            <Tabs
                tabItemContainerStyle={styles.tabItemContainer}
                value={props.value}
                onChange={props.onChange}
            >
                <Tab icon={<ActionCode />} label="TypeScript" value={PlaygroundTabsValues.TAB_CODE} />
                <Tab icon={<ActionSubject />} label="Diagram Source" value={PlaygroundTabsValues.TAB_DIAGRAM_SOURCE} />
                <Tab icon={<ImageImage />} label="Diagram" value={PlaygroundTabsValues.TAB_DIAGRAM_IMAGE} />
            </Tabs>
            {content}
        </div>
    );
};

export {
    PlaygroundTabs,
    PlaygroundTabsValues
}
