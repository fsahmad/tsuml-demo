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
    code: string;
    diagramSource: string;
    diagramImage: string;
    onChange: (value: any) => void;
    onCodeChange: (value: any) => void;
}

const styles = {
    container: {
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column' as 'column',
    },
    content: {
        // flex: '1 1 auto',
        width: 'inherit',
        margin: '12px',
        color: '#000',
    },
    hidden: {
        display: 'none',
    },
    tabItemContainer: {
        flex: '0 0 auto',
    }
};

const PlaygroundTabs = (props: Props) => {
    // let content = null;

    /*switch (props.value) {
        case PlaygroundTabsValues.TAB_CODE:
            content = (
                <CodeEditor
                    style={styles.content}
                    hintText={'Enter TypeScript here'}
                    label={'TypeScript'}
                    value={props.code}
                    onChange={(_, newValue) => { props.onCodeChange(newValue); }} />
            );
            break;
        case PlaygroundTabsValues.TAB_DIAGRAM_SOURCE:
            content = (
                <CodeEditor
                    style={styles.content}
                    label={'PlantUML'}
                    readonly={true}
                    value={props.diagramSource} />
            );
            break;
        case PlaygroundTabsValues.TAB_DIAGRAM_IMAGE:
            content = <div><img src={props.diagramImage} /></div>;
            break;
        default:
            break;
    }*/

    return (
        <div style={styles.container}>
            <Tabs
                tabItemContainerStyle={styles.tabItemContainer}
                value={props.value}
                onChange={props.onChange}
            >
                <Tab icon={<ActionCode />} label="TypeScript" value={PlaygroundTabsValues.TAB_CODE}>
                    <CodeEditor
                        style={styles.content}
                        hintText={'Enter TypeScript here'}
                        label={'TypeScript'}
                        value={props.code}
                        onChange={(_, newValue) => { props.onCodeChange(newValue); }}
                    />
                </Tab>
                <Tab icon={<ActionSubject />} label="Diagram Source" value={PlaygroundTabsValues.TAB_DIAGRAM_SOURCE}>
                    <CodeEditor
                        style={styles.content}
                        label={'PlantUML'}
                        readonly={true}
                        value={props.diagramSource}
                    />
                </Tab>
                <Tab icon={<ImageImage />} label="Diagram" value={PlaygroundTabsValues.TAB_DIAGRAM_IMAGE}>
                    <div style={styles.content}>
                        <img src={props.diagramImage} />
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export {
    PlaygroundTabs,
    PlaygroundTabsValues
}
