import * as React from 'react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  space,
  color,
  layout,
  background,
  border,
  position,
  shadow,
} from 'styled-system';

const Box = styled('div', {
  shouldForwardProp,
})`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;

Box.displayName = 'Box';

export default Box;
