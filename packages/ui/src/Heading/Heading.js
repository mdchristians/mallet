import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../MalletProvider';
import { StyledHeading } from './Heading.styles';

/**
 * Heading Component
 */
const Heading = React.forwardRef(({ as, color, children, ...rest }, ref) => {
  const theme = useTheme();

  const checkColor = useCallback(
    function checkColor() {
      return getColorVariation(color, theme.colors);
    },
    [color]
  );

  return (
    <StyledHeading ref={ref} as={as} color={checkColor()} {...rest}>
      {children}
    </StyledHeading>
  );
});

Heading.displayName = 'Heading';

Heading.defaultProps = {
  as: 'h2',
  color: 'text',
};

Heading.propTypes = {
  /**
   * Heading sizes
   */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * Color of the text
   */
  color: PropTypes.string,
};

export default Heading;

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
