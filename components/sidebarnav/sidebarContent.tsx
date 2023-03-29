import { HomeIcon, UserIcon, CogIcon, LogoutIcon } from '@heroicons/react/solid';

const navItems = [
  {
    label: 'Dashboard',
    icon: <HomeIcon className="h-5 w-5" />,
    onClick: () => console.log('Dashboard clicked'),
  },
  {
    label: 'Profile',
    icon: <UserIcon className="h-5 w-5" />,
    onClick: () => console.log('Profile clicked'),
  },
  {
    label: 'Settings',
    icon: <CogIcon className="h-5 w-5" />,
    onClick: () => console.log('Settings clicked'),
  },
  {
    label: 'Logout',
    icon: <LogoutIcon className="h-5 w-5" />,
    onClick: () => console.log('Logout clicked'),
  },
];

export default navItems;
