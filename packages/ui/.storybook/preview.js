import React from 'react';
import { addDecorator } from '@storybook/react';
import { MalletProvider } from '../src';

addDecorator((storyFn) => <MalletProvider>{storyFn()}</MalletProvider>);
