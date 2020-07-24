import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { css } from '@emotion/core';
import { Box } from '../';

const blockHorizontal = css`
  > *:first-of-type:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  > *:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
  }
  > *:not(:first-of-type):last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const blockVertical = css`
  flex-direction: column;

  > *:first-of-type:not(:last-of-type) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  > *:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
  }
  > *:not(:first-of-type):last-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const horizontal = css`
  > *:not(:first-of-type) {
    margin-left: 0.5rem;
  }
`;

const vertical = css`
  flex-direction: column;
  > *:not(:first-of-type) {
    margin-top: 0.5rem;
  }
`;

export const StyledButtonGroup = styled(Box, { shouldForwardProp })`
  display: inline-flex;
  height: min-content;

  ${(props) => props.isBlock && !props.isVertical && blockHorizontal}
  ${(props) => props.isBlock && props.isVertical && blockVertical}
  ${(props) => !props.isBlock && !props.isVertical && horizontal}
  ${(props) => !props.isBlock && props.isVertical && vertical}
`;
