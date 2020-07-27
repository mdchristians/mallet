import THEME from './theme';

export const fontSizes = () => {
  return Object.keys(THEME.fontSizes).filter((key) => isNaN(key));
};
