import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Flex from '../Flex';

export const StyledTab = styled(Flex)`
  /* Base Styles */
  appearance: none;
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s linear, background-color 0.3s linear;
  cursor: pointer;
  border: none;

  /* Base States */
  &:focus,
  &:active {
    outline: none;
  }

  color: ${(props) =>
    props.isSelected
      ? props.theme.colors[props.variant].main
      : props.theme.colors.label};
  background-color: #fff;
  &:hover {
    background-color: ${(props) => props.theme.colors[props.variant].lights};
  }

  &:disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
    box-shadow: none;
  }

  ${(props) =>
    props.isBlock &&
    css`
      width: 100%;
      justify-content: center;
      align-items: center;
    `}
`;
