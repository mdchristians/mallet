import styled from '@emotion/styled';
import { variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import Box from '../Box';

export const StyledIconButton = styled(Box, { shouldForwardProp })`
  /* Base Styles */
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  transition: color 0.2s linear, background-color 0.3s linear,
    border-color 0.3s linear;
  cursor: pointer;
  border: none;

  /* Base States */
  &:focus,
  &:active {
    outline: none;
  }

  &:disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
    box-shadow: none;
  }

  background-color: transparent;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors[props.variant]['subtle']};
  }

  ${variant({
    prop: 'size',
    variants: {
      xs: {
        height: 6,
        width: 6,
        borderRadius: 'md',
      },
      sm: {
        height: 7,
        width: 7,
        borderRadius: 'md',
      },
      md: {
        height: 7,
        width: 7,
        borderRadius: 'md',
      },
      lg: {
        height: 9,
        width: 9,
        borderRadius: 'md',
      },
    },
  })}
`;
