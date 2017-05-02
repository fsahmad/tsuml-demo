import * as React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// Icons
import ActionCode from 'material-ui/svg-icons/action/code';
import ActionSubject from 'material-ui/svg-icons/action/subject';
import ImageImage from 'material-ui/svg-icons/image/image';

const PlaygroundTabsValues = {
    TAB_CODE: 'code',
    TAB_DIAGRAM_SOURCE: 'diagramSource',
    TAB_DIAGRAM_IMAGE: 'diagramImage',
};

interface Props {
    value: any;
    onChange: (value: any) => void;
}

const PlaygroundTabs = (props: Props) => (
    <Tabs
        value={props.value}
        onChange={props.onChange}
    >
        <Tab icon={<ActionCode />} label="TypeScript" value={PlaygroundTabsValues.TAB_CODE} />
        <Tab icon={<ActionSubject />} label="Diagram Source" value={PlaygroundTabsValues.TAB_DIAGRAM_SOURCE} />
        <Tab icon={<ImageImage />} label="Diagram" value={PlaygroundTabsValues.TAB_DIAGRAM_IMAGE} />
    </Tabs>
);

export {
    PlaygroundTabs,
    PlaygroundTabsValues
}
