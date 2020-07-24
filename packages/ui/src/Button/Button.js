import * as React from 'react';
import PropTypes from 'prop-types';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useTheme } from '../MalletProvider';
import { getLoaderColor, getLoaderSize } from './utils';
import {
  ButtonWrapper,
  ButtonChildren,
  IconWrapper,
  LoaderWrapper,
} from './Button.styles';

const Button = React.forwardRef(function Button({ children, ...props }, ref) {
  const theme = useTheme();

  console.log(theme);
  const {
    isDisabled,
    isLoading,
    isBlock,
    type,
    loadingText,
    variant,
    size,
    iconLeft,
    iconRight,
    ...rest
  } = props;

  const { loaderSize, iconSize } = getLoaderSize(size, theme);
  const loaderColor = getLoaderColor(variant, type, theme);

  return (
    <ButtonWrapper
      ref={ref}
      variant={variant}
      type={type}
      size={size}
      isBlock={isBlock}
      isLoading={isLoading}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading && (
        <LoaderWrapper>
          <ScaleLoader
            loading={true}
            height={loaderSize}
            width={2}
            margin={1}
            color={loaderColor}
          />
        </LoaderWrapper>
      )}

      <ButtonChildren isLoading={isLoading}>
        {iconLeft && (
          <IconWrapper left>
            {React.cloneElement(iconLeft, { size: iconSize })}
          </IconWrapper>
        )}
        {children}
        {iconRight && (
          <IconWrapper right>
            {React.cloneElement(iconRight, { size: iconSize })}
          </IconWrapper>
        )}
      </ButtonChildren>
    </ButtonWrapper>
  );
});

Button.defaultProps = {
  isDisabled: false,
  isLoading: false,
  isBlock: false,
  type: 'default',
  variant: 'default',
  loadingText: false,
  size: 'md',
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isBlock: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'outline', 'subtle', 'link']),
  loadingText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
};

Button.displayName = 'Button';

export default Button;
