import React from 'react';
import infoAddon from '@storybook/addon-info';
import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ReactGesture from 'react-gesture';

setAddon(infoAddon);

const blockStyle = {
  width: 400,
  height: 300,
  backgroundColor: 'whitesmoke',
};

storiesOf('React-gesture', module)
  .addWithInfo('Example', () => (
    <ReactGesture
      onSwipeUp={action('swipe up')}
      onSwipeDown={action('shipe down')}
      onSwipeLeft={action('swipe left')}
      onSwipeRight={action('swipe right')}
    >
      <div style={blockStyle} />
    </ReactGesture>
  ));
