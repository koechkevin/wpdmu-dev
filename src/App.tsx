import React, { Suspense } from 'react';
import Routes from './Routes/Routes';
import {CircularProgress, ThemeProvider} from '@material-ui/core';
import theme from './theme';
import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Suspense fallback={<CircularProgress style={{ position: 'absolute', left: '48%', top: '48%'}} color="primary"/> }>
          <Routes />
        </Suspense>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
