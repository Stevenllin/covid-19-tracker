import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../../app/core/router';
import LazySpinner from '../../common/components/Spinner/LazySpinner';

const FeaturesRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner/>}>
      <BrowserRouter>
        <Switch>
          <Route
            path={ROUTES.FEATURES__HOMEPAGE}
            component={React.lazy(() => import('./Homepage'))}
          />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}
export default FeaturesRoutes;
