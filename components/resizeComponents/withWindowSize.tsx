import { FunctionComponent } from 'react';
import { useWindowSize } from './useWindowSize';

export const withWindowSize = <P extends object>(Component: FunctionComponent<P>) => {
  return (props: P) => {
    const size = useWindowSize();
    
    return <Component {...props} windowSize={size} />;
  }
}
