import debounce = require('lodash/debounce');
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
    debounce?: number;
}

interface State {
    text: string | undefined;
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

class CodeEditor extends React.PureComponent<Props, State> {

    public static defaultProps = {
        style: {

        },
        readonly: false,
        value: undefined,
        hintText: undefined,
        label: undefined,
        rows: 10,
        debounce: 500,
    };

    private _onChangeDebounce: (event: object, newValue: string) => void;

    constructor(props: Props) {
        super(props);

        this.state = {
            text: props.value
        };

        this.onChange = this.onChange.bind(this);
        this._onChangeDebounce = debounce(
            (event: object, newValue: string) => {
                if (this.props.onChange) {
                    this.props.onChange(event, newValue);
                }
            },
            props.debounce).bind(this);
    }

    public componentWillReceiveProps(nextProps: Readonly<Props>) {
        if (nextProps.hasOwnProperty('value') && this.props.value !== nextProps.value) {
            this.setState({
                text: nextProps.value,
            });
        }
    }

    public render() {
        return (
            <TextField
                hintText={this.props.hintText}
                floatingLabelText={this.props.label}
                floatingLabelFixed={true}
                multiLine={true}
                fullWidth={true}
                rows={this.props.rows}
                rowsMax={this.props.rowsMax}
                style={this.props.style}
                hintStyle={this.props.readonly ? styles.hintReadonly : styles.hint}
                textareaStyle={styles.textarea}
                disabled={this.props.readonly}
                onChange={this.onChange}
                value={this.state.text}
            />
        );
    }

    private onChange(event: any, newValue: string) {
        this.setState({ text: newValue });
        this._onChangeDebounce(event, newValue);
    }

}

export default CodeEditor;
