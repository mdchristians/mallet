import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../MalletProvider';
import { StyledText } from './Text.styles';

/**
 * Text Component
 */
const Text = React.forwardRef(({ as, size, color, children, ...rest }, ref) => {
  const theme = useTheme();

  const checkColor = useCallback(
    function checkColor() {
      return getColorVariation(color, theme.colors);
    },
    [color]
  );

  return (
    <StyledText
      ref={ref}
      as={as}
      fontSize={size}
      color={checkColor()}
      {...rest}
    >
      {children}
    </StyledText>
  );
});

Text.displayName = 'Text';

Text.defaultProps = {
  as: 'p',
  size: 'md',
  color: 'text',
};

Text.propTypes = {
  /**
   * Basically any html element to display text should work here. For example: `i`, `u`, `abbr`, `cite`, `del`, `em`, `ins`, `kbd`, `mark`, `s`, `samp`, `sub`, `sup`
   */
  as: PropTypes.string,
  /**
   * Size of the text using aliases defined in the theme
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
  /**
   * Color of the text
   */
  color: PropTypes.string,
  /**
   * Text content (must be a string as of now...)
   */
  children: PropTypes.string.isRequired,
};

export default Text;

/**
 * HELPERS
 */

function getColorVariation(color, colors) {
  // We have a variant
  if (typeof colors[color] === 'string') {
    return color;
  } else {
    if (colors[color] && !color.includes('.')) {
      return colors[color]['main'] ? colors[color]['main'] : colors[color][7];
    }

    return color;
  }
}
