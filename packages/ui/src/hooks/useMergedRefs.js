import * as React from 'react';

/**
 * Assigns a single value to multiple refs
 */
const useMergedRefs = (...refs) => {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }

    return (node) => {
      refs.forEach((ref) => {
        if (ref === null) {
          return;
        }

        if (typeof ref === 'function') {
          ref(node);
        } else {
          try {
            ref.current = node;
          } catch (error) {
            throw new Error(`Cannot assign node "${node}" to ref "${ref}"`);
          }
        }
      });
    };
  }, [...refs]);
};

export default useMergedRefs;
