import React, { lazy } from 'react';
import { RoutesConfig } from './interfaces';

const Exception = lazy(() => import('../Exception/Exception'));
const SetUp = lazy(() => import('../pages/SetUp/SetUp'));

export const routesConfig: RoutesConfig[] = [
  {
    name: 'Sign Up',
    path: '/',
    authenticated: false,
    component: SetUp,
  },
  {
    name: 'Not Found',
    path: '',
    authenticated: false,
    component: (props: any) => <Exception {...props} exception={404} text={'The page you are looking for does not exist'} />,
  },
];
