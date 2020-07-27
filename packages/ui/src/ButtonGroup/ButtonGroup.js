import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonGroup } from './ButtonGroup.styles';
import { defaultContextProps, ButtonGroupContext } from './ButtonGroup.context';

const ButtonGroup = React.forwardRef(
  ({ isBlock, isVertical, role, children, ...props }, ref) => {
    const initProps = React.useMemo(
      () => ({
        isBlock,
        isVertical,
      }),
      [isBlock, isVertical]
    );

    return (
      <ButtonGroupContext.Provider value={initProps}>
        <StyledButtonGroup ref={ref} role={role} {...initProps} {...props}>
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
  role: PropTypes.string,
  isBlock: PropTypes.bool,
  isVertical: PropTypes.bool,
};

export default ButtonGroup;
