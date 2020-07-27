import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { typography } from 'styled-system';
import Box from '../Box';

export const StyledText = styled(Box, {
  shouldForwardProp,
})`
  ${typography}
`;
