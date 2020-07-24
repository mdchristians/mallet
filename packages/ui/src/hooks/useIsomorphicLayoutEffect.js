import * as React from 'react';
import { canUseDOM } from '../utils';

const useIsomorphicLayoutEffect = canUseDOM
  ? React.useLayoutEffect
  : React.useEffect;

export default useIsomorphicLayoutEffect;
