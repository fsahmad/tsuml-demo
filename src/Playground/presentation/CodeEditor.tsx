import * as React from 'react';
import TextField from 'material-ui/TextField';

interface Props {
    style: any;
}

const styles = {
    hint: {
        bottom: undefined,
        top: '36px',
    },
    textarea: {
        fontFamily: 'Roboto Mono, monospace',
    }
};

const CodeEditor = (props: Props) => {
    return (
        <TextField
            hintText="Enter TypeScript here"
            floatingLabelText="TypeScript"
            floatingLabelFixed={true}
            multiLine={true}
            fullWidth={true}
            style={props.style}
            hintStyle={styles.hint}
            textareaStyle={styles.textarea}
        />
    );
};

export default CodeEditor;
