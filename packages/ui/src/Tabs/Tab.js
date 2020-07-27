import React from 'react';
import PropTypes from 'prop-types';
import { StyledTab } from './styles';

const Tab = React.forwardRef(function Tab(
  {
    id,
    variant,
    label,
    isBlock,
    isSelected,
    orientation,
    handleTabClick,
    ...rest
  },
  ref
) {
  return (
    <StyledTab
      data-mallet-tab=""
      ref={ref}
      role="tab"
      tabIndex={isSelected ? 0 : -1}
      aria-controls={`panel-${id}`}
      data-orientation={orientation}
      data-selected={isSelected ? '' : undefined}
      height={8}
      minWidth={8}
      px={6}
      fontSize="sm"
      variant={variant}
      isBlock={isBlock}
      isSelected={isSelected}
      onClick={handleTabClick}
      {...rest}
    >
      {label}
    </StyledTab>
  );
});

Tab.displayName = 'Tab';

Tab.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tab;
