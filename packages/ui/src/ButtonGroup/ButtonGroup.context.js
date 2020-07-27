import * as React from 'react';

export const defaultContextProps = {
  isBlock: false,
  isVertical: false,
  role: 'group',
};

export const ButtonGroupContext = React.createContext(defaultContextProps);
export const useButtonGroup = () => React.useContext(ButtonGroupContext);
