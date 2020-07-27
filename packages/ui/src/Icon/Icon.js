import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../MalletProvider';
import { AiOutlineInfo } from 'react-icons/ai';

const Icon = forwardRef(function Icon(props, ref) {
  const { size, color, role, focusable, children, type, ...rest } = props;
  const theme = useTheme();

  const Comp = type ? type : AiOutlineInfo;

  return (
    <Comp
      ref={ref}
      size={theme.fontSizes[size]}
      color={theme.colors[color]}
      role={role}
      focusable={focusable}
      {...rest}
    />
  );
});

Icon.displayName = 'Icon';

Icon.defaultProps = {
  role: 'presentation',
  focusable: false,
  color: 'text',
  size: 'md',
};

Icon.propTypes = {
  role: PropTypes.string,
  focusable: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
