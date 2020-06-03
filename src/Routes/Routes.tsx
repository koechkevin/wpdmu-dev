import React, { lazy, FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { routesConfig } from './routesConfig';
import { RoutesConfig } from './interfaces';

const Exception = lazy(() => import('../Exception/Exception'));

const AuthComponent: FC<RoutesConfig> = (props) => {
  const { component: Component, authenticated, allowedRoles } = props;
  // TODO: implement authentication after log in
  const auth = {
    isLoggedIn: true,
  };
  const user = { role: '' };

  if (authenticated && !auth.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Exception {...props} exception={403} text="You are not authorized to access this page" />;
  }
  return <Component {...props} />;
};

const Routes: FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      {routesConfig.map((each: RoutesConfig, index: number) => (
        <Route key={index} exact path={each.path} render={(props: any) => <AuthComponent {...props} {...each} />} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
