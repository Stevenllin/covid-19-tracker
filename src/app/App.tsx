import React from 'react';
import AppRoutes from './AppRoutes';
import store from 'app/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
