import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { genId } from '../utils';
import Box from '../Box';
import Flex from '../Flex';
import ButtonGroup from '../ButtonGroup';
import Tab from './Tab';
import TabIndicator from './TabIndicator';
import TabPanel from './TabPanel';

const Tabs = ({ initialIdx, orientation, isBlock, variant, children }) => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(initialIdx);

  // Create tabs with ids using <Tab /> children
  const tabs = useMemo(() => {
    return createChildren(children);
  }, children);

  // Create references to the tabs
  const tabRefs = tabs.reduce((acc, tab) => {
    acc[tab.props.id] = React.createRef();
    return acc;
  }, {});

  return (
    <Flex
      data-mallet-tabs=""
      direction={orientation === 'vertical' ? 'row' : 'column'}
    >
      <Box position="relative" display="block">
        <ButtonGroup
          role="tablist"
          data-mallet-tab-list=""
          aria-orientation={orientation}
          borderBottom={orientation === 'vertical' ? 'none' : 'solid 2px'}
          borderRight={orientation === 'vertical' ? 'solid 2px' : 'none'}
          borderColor={'default.main'}
          isVertical={orientation === 'vertical'}
          isBlock={orientation === 'vertical' || isBlock}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.props.id}
              id={tab.props.id}
              ref={tabRefs[tab.props.id]}
              variant={variant}
              label={tab.props.label}
              orientation={orientation}
              isBlock={isBlock}
              isSelected={selectedTabIdx === tab.props.idx}
              handleTabClick={() => setSelectedTabIdx(tab.props.idx)}
            />
          ))}
        </ButtonGroup>
        <TabIndicator
          refs={tabRefs}
          orientation={orientation}
          selectedTabId={tabs[selectedTabIdx].props.id}
        />
      </Box>
      <TabPanel tabId={tabs[selectedTabIdx].props.id} orientation={orientation}>
        {tabs[selectedTabIdx].props.children}
      </TabPanel>
    </Flex>
  );
};

Tabs.displayName = 'Tabs';

Tabs.defaultProps = {
  initialIdx: 0,
  orientation: 'horizontal',
  isBlock: false,
  variant: 'primary',
};

Tabs.propTypes = {
  /**
   * Index of the tab to display first
   */
  initialIdx: PropTypes.number,
  /**
   * Display the tab bar vertically (to the left of the tab panels)
   * or horizontally (above the panels)
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * When "true" the tab labels will be stretched to fill all available space
   */
  isBlock: PropTypes.bool,
  /**
   * The color theme/variant for the tab
   */
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
  ]),
};

export default Tabs;

/**
 * HELPERS
 */

function createChildren(children) {
  return React.Children.toArray(children).map((child, idx) => {
    return React.cloneElement(child, {
      id: genId(),
      idx,
      ...child.props,
    });
  });
}
