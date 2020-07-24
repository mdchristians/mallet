import * as React from 'react';

export const defaultContextProps = {
  isBlock: false,
  isVertical: false,
};

export const ButtonGroupContext = React.createContext(defaultContextProps);
export const useButtonGroup = () => React.useContext(ButtonGroupContext);
