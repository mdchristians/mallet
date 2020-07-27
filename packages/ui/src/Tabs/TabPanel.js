import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Box from '../Box';

const MotionBox = motion.custom(Box);

const TabPanel = ({ tabId, orientation, children, ...rest }) => {
  const isVertical = orientation === 'vertical';

  return (
    <AnimatePresence exitBeforeEnter>
      <MotionBox
        data-mallet-tab-panel=""
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={tabId}
        mt={isVertical ? 0 : 3}
        ml={isVertical ? 3 : 0}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        {...rest}
      >
        {children}
      </MotionBox>
    </AnimatePresence>
  );
};

export default TabPanel;
