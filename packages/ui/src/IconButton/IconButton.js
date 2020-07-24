import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIconButton } from './IconButton.styles';

const IconButton = forwardRef(
  ({ icon, size, variant, type, color, ...props }, ref) => {
    return (
      <StyledIconButton
        ref={ref}
        as="button"
        variant={variant}
        size={size}
        {...props}
      >
        <Icon type={icon} color={color} size={size} />
      </StyledIconButton>
    );
  }
);

IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
  size: 'md',
  type: 'default',
  variant: 'default',
};

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  type: PropTypes.oneOf(['default', 'outline', 'subtle', 'link']),
};

export default IconButton;
