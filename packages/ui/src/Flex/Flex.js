import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { flexbox } from 'styled-system';
import Box from '../Box';

const BaseFlex = styled(Box, { shouldForwardProp })`
  ${flexbox}
`;

const Flex = forwardRef(function Flex(props, ref) {
  const { direction, align, justify, wrap, basis, grow, ...rest } = props;

  return (
    <BaseFlex
      ref={ref}
      display="flex"
      flexDirection={props.direction}
      alignItems={props.align}
      justifyContent={props.justify}
      flexWrap={props.wrap}
      flexBasis={props.basis}
      flexGrow={props.grow}
      {...rest}
    />
  );
});

Flex.displayName = 'Flex';

Flex.propTypes = {
  direction: PropTypes.oneOf([
    'unset',
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  align: PropTypes.oneOf(['flex-end', 'flex-start', 'center', 'stretch']),
  justify: PropTypes.oneOf([
    'normal',
    'unset',
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
  ]),
  wrap: PropTypes.oneOf(['unset', 'initial', 'wrap', 'nowrap', 'wrap-reverse']),
  basis: PropTypes.number,
  grow: PropTypes.number,
};

export default Flex;
