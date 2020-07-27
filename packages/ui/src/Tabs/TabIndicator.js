import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { debounce } from '../utils';
import { color, layout } from 'styled-system';

const StyledIndicator = styled(motion.div)`
  box-sizing: border-box;
  margin: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  ${color};
  ${layout};
`;

const TabIndicator = ({ refs, selectedTabId, orientation }) => {
  const isVertical = orientation === 'vertical';

  const initAttributes = isVertical
    ? { y: 0, height: 0, right: 0, top: 0 }
    : { x: 0, width: 0, bottom: 0, left: 0 };

  const [attributes, setAttributes] = useState(initAttributes);

  /**
   * Function used to calculate the attributes of the tab indicator
   *
   * When a new tab is clicked or the dimensions of the screen change,
   * this is called.
   */
  const updateAttributes = useCallback(() => {
    if (refs && refs[selectedTabId]) {
      const rect = refs[selectedTabId].current.getBoundingClientRect();

      if (isVertical) {
        setAttributes({
          ...initAttributes,
          y: refs[selectedTabId].current.offsetTop,
          x: rect.width - 1,
          height: rect.height,
        });
      } else {
        setAttributes({
          ...initAttributes,
          x: refs[selectedTabId].current.offsetLeft,
          width: refs[selectedTabId].current.getBoundingClientRect().width,
        });
      }
    }
  }, [selectedTabId, refs]);

  /**
   * Watch for new tab selections or ref changes
   */
  useEffect(() => {
    updateAttributes();
  }, [selectedTabId, refs, updateAttributes]);

  /**
   * Watch for window size changes
   */
  useEffect(() => {
    const recalculateAttrs = debounce(() => {
      updateAttributes();
    }, 500);

    window.addEventListener('resize', recalculateAttrs);
    return () => window.removeEventListener('resize', recalculateAttrs);
  });

  return (
    <StyledIndicator
      backgroundColor="primary.main"
      animate={attributes}
      height={isVertical ? 'unset' : '2px'}
      width={isVertical ? '2px' : 'unset'}
    />
  );
};

export default TabIndicator;
