### WPMU DEV TEST

https://wpdmu-dev.azurewebsites.net/

#### Development

```shell script
yarn start:dev
```

#### Production

```shell script
yarn build && yarn start
```

Set Up with Create React App Typescript template

- Fast to set up
- Dynamic import syntax already configured with webpack.
- Dynamic imports help introduce code splitting into the app.
- Code splitting helps "lazy load" just what is needed by the user. Improves performance.
- You only have to use `React.lazy`.
  e.g

```typescript jsx
import React from 'react';
const Exception = React.lazy(() => import('./src/Exception/Exception'));

const App: React.FC<Props> = () => {
  return <Exception {...props} exception={403} text="You are not authorized to access this page" />;
};
```

- Lazy loading implemented at route level
- Scalable routes config

  - Supposing access level authentication is required in future of this SPA?
  - Routes Component super configurable with interface like

```typescript
export interface RoutesConfig {
  name?: string;
  path: string;
  allowedRoles?: string[];
  authenticated: boolean;
  component: any;
}
```

- Exception Component is super configurable as well accepts status code and custom Text and displays error message.

#### 404 Page

![](https://res.cloudinary.com/koech/image/upload/v1591199327/Screenshot_2020-06-03_at_18.46.57.png)

- For any UnAuthorized visit, Redirect to 403 instead

#### 403 Page

![](https://res.cloudinary.com/koech/image/upload/v1591199714/Screenshot_2020-06-03_at_18.54.30.png)

Static page can be served with Express or any other Server

React-Redux Setup initialized with version `^7.2.0`

- No need of connect HOC. `useSelector()` and `useDispatch()` hooks preferred.
- Example inside component

```typescript jsx
const { loading } = useSelector((state: Store) => ({
  loading: state.accountSetUp.submitting,
}));
```

- Redux related stuff reside inside redux folder.

Components are super configurable.

- They can be used anywhere.
- All components reside inside Components folder.
- Props make them super configurable.

Pages are Route components that are not exceptions.

- Made up of components
- Makes it easy to debug
- Best place to access redux state with `useSelector()`

The design mock ups don't cover the mobile view but I have covered in this implementation.

![](https://res.cloudinary.com/koech/image/upload/v1591200518/Screenshot_2020-06-03_at_19.08.26.png)

#### TODO

- Set Up unit tests with Jest and Enzyme or react testing library.
