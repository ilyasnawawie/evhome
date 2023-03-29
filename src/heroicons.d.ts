
declare module '@heroicons/react/solid' {
    import { SVGAttributes } from 'react';
  
    export interface HeroIcon extends SVGAttributes<SVGElement> {}
  
    export const HomeIcon: (props: HeroIcon) => JSX.Element;
    export const UserIcon: (props: HeroIcon) => JSX.Element;
    export const CogIcon: (props: HeroIcon) => JSX.Element;
    export const LogoutIcon: (props: HeroIcon) => JSX.Element;
  
  }
  
  declare module '@heroicons/react/outline' {
    import { SVGAttributes } from 'react';
  
    export interface HeroIcon extends SVGAttributes<SVGElement> {}
  
    export const HomeIcon: (props: HeroIcon) => JSX.Element;
    export const UserIcon: (props: HeroIcon) => JSX.Element;
    export const CogIcon: (props: HeroIcon) => JSX.Element;
    export const LogoutIcon: (props: HeroIcon) => JSX.Element;

  }
  