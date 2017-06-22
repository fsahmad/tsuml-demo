import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import CodeEditor from './CodeEditor';
import { PlaygroundTabsActions } from '../actions';

export interface StateProps {
    selection: PlaygroundTabsActions.CodeSample;
    code: string;
}

export interface DispatchProps {
    onCodeChange: (value: any) => void;
    onSampleChange: (value: any) => void;
}

export interface OwnProps {
    style?: any;
}

type Props = StateProps & DispatchProps & OwnProps;

const TypeScriptTab = (props: Props) => {
    let menuItems = [(
        <MenuItem
            key={-1}
            value={null}
        />
    )];

    menuItems = menuItems.concat(
        PlaygroundTabsActions.samples.map(
            (value, index) => {
                return (
                    <MenuItem
                        key={index}
                        value={value.id}
                        primaryText={value.label}
                    />
                );
            }
        )
    );

    return (
        <div
            style={props.style}
        >
            <SelectField
                floatingLabelText="Select example..."
                value={props.selection}
                onChange={(event, index, value) => { props.onSampleChange(value); }}
            >
                {menuItems}
            </SelectField>
            <CodeEditor
                hintText="Enter TypeScript here"
                label="TypeScript"
                value={props.code}
                onChange={(_, newValue) => { props.onCodeChange(newValue); }}
            />
        </div>
    );
};

export default TypeScriptTab;
