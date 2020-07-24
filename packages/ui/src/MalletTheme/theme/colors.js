import { generateBtnAliases } from './utils';

const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  black: '#000000',
  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
  ],
  red: [
    '#fff5f5',
    '#ffe3e3',
    '#ffc9c9',
    '#ffa8a8',
    '#ff8787',
    '#ff6b6b',
    '#fa5252',
    '#f03e3e',
    '#e03131',
    '#c92a2a',
  ],
  pink: [
    '#fff0f6',
    '#ffdeeb',
    '#fcc2d7',
    '#faa2c1',
    '#f783ac',
    '#f06595',
    '#e64980',
    '#d6336c',
    '#c2255c',
    '#a61e4d',
  ],
  grape: [
    '#f8f0fc',
    '#f3d9fa',
    '#eebefa',
    '#e599f7',
    '#da77f2',
    '#cc5de8',
    '#be4bdb',
    '#ae3ec9',
    '#9c36b5',
    '#862e9c',
  ],
  violet: [
    '#f3f0ff',
    '#e5dbff',
    '#d0bfff',
    '#b197fc',
    '#9775fa',
    '#845ef7',
    '#7950f2',
    '#7048e8',
    '#6741d9',
    '#5f3dc4',
  ],
  indigo: [
    '#edf2ff',
    '#dbe4ff',
    '#bac8ff',
    '#91a7ff',
    '#748ffc',
    '#5c7cfa',
    '#4c6ef5',
    '#4263eb',
    '#3b5bdb',
    '#364fc7',
  ],
  blue: [
    '#e7f5ff',
    '#d0ebff',
    '#a5d8ff',
    '#74c0fc',
    '#4dabf7',
    '#339af0',
    '#228be6',
    '#1c7ed6',
    '#1971c2',
    '#1864ab',
  ],
  cyan: [
    '#e3fafc',
    '#c5f6fa',
    '#99e9f2',
    '#66d9e8',
    '#3bc9db',
    '#22b8cf',
    '#15aabf',
    '#1098ad',
    '#0c8599',
    '#0b7285',
  ],
  teal: [
    '#e6fcf5',
    '#c3fae8',
    '#96f2d7',
    '#63e6be',
    '#38d9a9',
    '#20c997',
    '#12b886',
    '#0ca678',
    '#099268',
    '#087f5b',
  ],
  green: [
    '#ebfbee',
    '#d3f9d8',
    '#b2f2bb',
    '#8ce99a',
    '#69db7c',
    '#51cf66',
    '#40c057',
    '#37b24d',
    '#2f9e44',
    '#2b8a3e',
  ],
  lime: [
    '#f4fce3',
    '#e9fac8',
    '#d8f5a2',
    '#c0eb75',
    '#a9e34b',
    '#94d82d',
    '#82c91e',
    '#74b816',
    '#66a80f',
    '#5c940d',
  ],
  yellow: [
    '#fff9db',
    '#fff3bf',
    '#ffec99',
    '#ffe066',
    '#ffd43b',
    '#fcc419',
    '#fab005',
    '#f59f00',
    '#f08c00',
    '#e67700',
  ],
  orange: [
    '#fff4e6',
    '#ffe8cc',
    '#ffd8a8',
    '#ffc078',
    '#ffa94d',
    '#ff922b',
    '#fd7e14',
    '#f76707',
    '#e8590c',
    '#d9480f',
  ],
};

// Typography Aliases
colors.text = colors.gray[8];
colors.heading = colors.gray[8];
colors.label = colors.gray[6];
colors.disabled = colors.gray[5];

// Variants
const def = {
  subtle: colors.gray[1],
  light: colors.gray[2],
  main: colors.gray[4],
  dark: colors.gray[5],
  text: colors.gray[8],
};

const primary = {
  subtle: colors.violet[1],
  light: colors.violet[3],
  main: colors.violet[4],
  dark: colors.violet[6],
  text: colors.white,
};

const secondary = {
  subtle: colors.indigo[1],
  light: colors.indigo[3],
  main: colors.indigo[5],
  dark: colors.indigo[7],
  text: colors.white,
};

const info = {
  subtle: colors.blue[1],
  light: colors.blue[3],
  main: colors.blue[5],
  dark: colors.blue[7],
  text: colors.white,
};

const success = {
  subtle: colors.green[1],
  light: colors.green[3],
  main: colors.green[5],
  dark: colors.green[7],
  text: colors.white,
};

const warn = {
  subtle: colors.yellow[1],
  light: colors.yellow[3],
  main: colors.yellow[5],
  dark: colors.yellow[7],
  text: colors.white,
};

const danger = {
  subtle: colors.red[1],
  light: colors.red[3],
  main: colors.red[5],
  dark: colors.red[7],
  text: colors.white,
};

colors.default = def;
colors.primary = primary;
colors.secondary = secondary;
colors.info = info;
colors.success = success;
colors.warn = warn;
colors.danger = danger;

// Button Aliases
colors.btn = {
  default: generateBtnAliases(def),
  primary: generateBtnAliases(primary),
  secondary: generateBtnAliases(secondary),
  success: generateBtnAliases(success),
  warn: generateBtnAliases(warn),
  danger: generateBtnAliases(danger),
};

export default colors;
