import React from 'react';
import { EditProvider, ThemeControls } from '@styled-system/edit';

function ToastExample(props) {
  return (
    <EditProvider>
      {props.children}
      <ThemeControls />
    </EditProvider>
  );
}

export default ToastExample;
