import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonGroup } from './ButtonGroup.styles';
import { defaultContextProps, ButtonGroupContext } from './ButtonGroup.context';

const ButtonGroup = React.forwardRef(
  ({ isBlock, isVertical, children, ...props }, ref) => {
    const initProps = React.useMemo(
      () => ({
        isBlock,
        isVertical,
      }),
      [isBlock, isVertical]
    );

    return (
      <ButtonGroupContext.Provider value={initProps}>
        <StyledButtonGroup ref={ref} role="group" {...initProps} {...props}>
          {children}
        </StyledButtonGroup>
      </ButtonGroupContext.Provider>
    );
  }
);

ButtonGroup.defaultProps = {
  ...defaultContextProps,
};

ButtonGroup.propTypes = {
  isBlock: PropTypes.bool,
  isVertical: PropTypes.bool,
};

export default ButtonGroup;
