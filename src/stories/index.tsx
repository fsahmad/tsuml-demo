import * as React from 'react';
import { storiesOf } from '@storybook/react';
const action: any = require('@storybook/addon-actions').action;
console.dir(action);
// import { linkTo } from '@storybook/addon-links';
// import Button from './Button';
// import Welcome from './Welcome';
import CodeEditor from '../Playground/presentation/CodeEditor';
import mui from './util/mui';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';

injectTapEventPlugin();

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('CodeEditor', module)
  .add('empty', () => mui(<CodeEditor />))
  .add('hint and label', () => mui(
    <CodeEditor
      hintText={'Hint'}
      label={'Label'}
      onChange={action('onChange')}
    />))
  .add('value', () => mui(
    <CodeEditor
      hintText={'Hint'}
      label={'Label'}
      value={`class Example {

  private _myVar: string;

  public get myVar(): string {
    return this._myVar;
  }

}`}
    />));

storiesOf('TextField', module)
  .add('hint and label', () => mui(
    <TextField
      hintText={'Hint text'}
      floatingLabelText={'Label text'}
      floatingLabelFixed={true}
      onChange={undefined}
      multiLine={true}
      style={{}}
    />));
