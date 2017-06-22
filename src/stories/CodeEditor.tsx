import * as React from 'react';
import { storiesOf } from '@storybook/react';

const action: any = require('@storybook/addon-actions').action;

import mui from './util/mui';
import CodeEditor from '../Playground/presentation/CodeEditor';

storiesOf('CodeEditor', module)
  .add('empty', () => mui(<CodeEditor />))
  .add('debounce 2000ms', () => mui(
    <CodeEditor
      hintText={'Type here'}
      label={'Debounce 2000ms'}
      debounce={2000}
      onChange={action('onChange')}
    />))
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
