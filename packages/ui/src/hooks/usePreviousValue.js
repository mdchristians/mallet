import * as React from 'react';

/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */
function usePreviousValue(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default usePreviousValue;
