import * as React from 'react';
import TextField from 'material-ui/TextField';

interface Props {
    rows?: number;
    rowsMax?: number;
    style?: any;
    readonly?: boolean;
    value?: string;
    hintText?: string;
    label?: string;
    onChange?: (event: object, newValue: string) => void;
}

const hintStyle = {
    bottom: undefined,
    top: '36px',
};

const styles = {
    hint: hintStyle,
    hintReadonly: {
        ...hintStyle,
        color: '#000',
    },
    textarea: {
        fontFamily: 'Roboto Mono, monospace',
        color: '#000',
    }
};

const CodeEditor: React.StatelessComponent<Props> = (props) => {
    return (
        <TextField
            hintText={props.hintText}
            floatingLabelText={props.label}
            floatingLabelFixed={true}
            multiLine={true}
            fullWidth={true}
            rows={props.rows}
            rowsMax={props.rowsMax}
            style={props.style}
            hintStyle={props.readonly ? styles.hintReadonly : styles.hint}
            textareaStyle={styles.textarea}
            disabled={props.readonly}
            value={props.value}
            onChange={props.onChange}
        />
    );
};

CodeEditor.defaultProps = {
    style: {

    },
    readonly: false,
    value: undefined,
    hintText: undefined,
    label: undefined,
    rows: 10,
};

export default CodeEditor;
