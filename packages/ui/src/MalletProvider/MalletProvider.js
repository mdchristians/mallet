import * as React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider as EmotionThemeProvider,
  useTheme,
} from 'emotion-theming';
import CSSReset from '../CSSReset';
import MalletTheme from '../MalletTheme';
import { ToasterProvider } from '../Toaster';

const MalletProvider = (props) => {
  const { children, theme = MalletTheme, useReset } = props;

  return (
    <EmotionThemeProvider theme={theme}>
      <ToasterProvider>
        {useReset && <CSSReset />}
        {children}
      </ToasterProvider>
    </EmotionThemeProvider>
  );
};

MalletProvider.defaultProps = {
  theme: MalletTheme,
  useReset: true,
};

MalletProvider.propTypes = {
  theme: PropTypes.shape({}),
  useReset: PropTypes.bool,
};

export { MalletProvider, useTheme };
