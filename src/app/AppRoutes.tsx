import React from 'react';
import { ROUTES } from '../app/core/router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LazySpinner from './common/components/Spinner/LazySpinner';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LazySpinner />}>
    <BrowserRouter>
      <Switch>
        <Route
          path={ROUTES.FEATURES}
          component={React.lazy(() => import('./feature/Feature'))}
        />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default AppRoutes;
