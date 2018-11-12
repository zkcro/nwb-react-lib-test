import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src';

const ButtonDisplay = (props) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: '0 0 50%', display: 'flex', flexWrap: 'wrap', padding: '3em', }}>
      <Button {...props} variant="default">variant: default</Button>
    </div>
    <div style={{ flex: '0 0 50%', display: 'flex', flexWrap: 'wrap', padding: '3em' }}>
      <Button {...props} variant="primary">variant: primary</Button>
    </div>
    <div style={{ flex: '0 0 50%', display: 'flex', flexWrap: 'wrap', padding: '3em' }}>
      <Button {...props} variant="secondary">variant: secondary</Button>
    </div>
    <div style={{ flex: '0 0 50%', display: 'flex', flexWrap: 'wrap', padding: '3em', backgroundColor: '#666' }}>
      <Button {...props} variant="inverted">variant: inverted</Button>
    </div>
  </div>
)

storiesOf('Button', module)
  .add('variants', () => (
    <ButtonDisplay onClick={action('clicked')} />
  ))
  .add('disabled', () => (
    <Button onClick={action('clicked')} disabled>Hello Button</Button>
  ))
  .add('processing', () => (
    <Button onClick={action('clicked')} variant="primary" processing>Hello Button</Button>
  ))

