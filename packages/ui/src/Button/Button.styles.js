import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { space, layout, variant, compose } from 'styled-system';
import Flex from '../Flex';

const getTypeVariant = (props) =>
  variant({
    prop: 'type',
    variants: {
      default: {
        color: props.theme.colors.btn[props.variant].base.text,
        bg: props.theme.colors.btn[props.variant].base.bg,
        '&:hover, &:focus': {
          bg: props.theme.colors.btn[props.variant].base.active.bg,
        },
      },
      outline: {
        color: props.theme.colors.btn[props.variant].outline.text,
        bg: props.theme.colors.btn[props.variant].outline.bg,
        border: `1px solid ${
          props.theme.colors.btn[props.variant].outline.border
        }`,
        '&:hover, &:focus': {
          color: props.theme.colors.btn[props.variant].outline.active.text,
          borderColor:
            props.theme.colors.btn[props.variant].outline.active.border,
        },
      },
      subtle: {
        color: props.theme.colors.btn[props.variant].subtle.text,
        bg: props.theme.colors.btn[props.variant].subtle.bg,
        '&:hover, &:focus': {
          color: props.theme.colors.btn[props.variant].outline.active.text,
          bg: props.theme.colors.btn[props.variant].outline.active.bg,
        },
      },
      link: {
        color: props.theme.colors.btn[props.variant].outline.text,
        bg: 'transparent',
        border: 'none',
        '&:hover, &:focus': {
          color: props.theme.colors.btn[props.variant].base.active.text,
          bg: 'transparent',
          border: 'none',
          textDecoration: 'underline',
        },
      },
    },
  });

export const ButtonWrapper = styled(Flex)`
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
  transition: color 0.2s linear, background-color 0.3s linear, border-color 0.3s linear;
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

  ${(props) =>
    props.isBlock
      ? css`
          width: 100%;
          justify-content: center;
          align-items: center;
        `
      : ''}

  /* Variants */
  ${(props) => getTypeVariant(props)}

  ${(props) =>
    props.isLoading
      ? css`
          pointer-events: none !important;
          cursor: default !important;
          textdecoration: none important!;
        `
      : ''}

  ${variant({
    prop: 'size',
    variants: {
      xs: {
        height: 6,
        minWidth: 6,
        px: 3,
        borderRadius: 'md',
        fontSize: 'xs',
      },
      sm: {
        height: 7,
        minWidth: 7,
        px: 4,
        borderRadius: 'md',
        fontSize: 'xs',
      },
      md: {
        height: 8,
        minWidth: 8,
        px: 6,
        borderRadius: 'md',
        fontSize: 'sm',
      },
      lg: {
        height: 9,
        minWidth: 9,
        px: 7,
        borderRadius: 'md',
        fontSize: 'md',
      },
    },
  })}

  ${compose(space, layout)};
`;

export const ButtonChildren = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isLoading
      ? css`
          color: transparent !important;
        `
      : ''}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.left
      ? css`
          margin-right: 5px;
        `
      : css`
          margin-left: 5px;
        `}
  }
`;

export const LoaderWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
