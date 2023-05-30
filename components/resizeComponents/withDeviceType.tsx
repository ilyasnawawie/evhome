import { FunctionComponent } from 'react';
import { useDeviceType } from './useDeviceType';

export const withDeviceType = <P extends object>(Component: FunctionComponent<P>) => {
  return (props: P) => {
    const deviceType = useDeviceType();
    
    return <Component {...props} deviceType={deviceType} />;
  }
}
