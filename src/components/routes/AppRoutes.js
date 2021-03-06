import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage';

const SignInForm = lazy(() =>
  import(/* webpackChunkName: "signInForm" */ '../organisms/SIgnInForm')
);
const SignUpForm = lazy(() =>
  import(/* webpackChunkName: "signUpForm" */ '../organisms/SignUpForm')
);
const Consultation = lazy(() =>
  import(/* webpackChunkName: "consultations" */ '../pages/Consultation')
);
const NotFoundPage = lazy(() =>
  import(/* webpackChunkName: "notFoundPage" */ '../pages/NotFoundPage')
);

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Suspense fallback={<LoadingPage />}>
        <Consultation />
      </Suspense>
    </Route>
    <Route path="/sign-in" exact>
      <Suspense fallback={<LoadingPage />}>
        <SignInForm />
      </Suspense>
    </Route>
    <Route path="/sign-up" exact>
      <Suspense fallback={<LoadingPage />}>
        <SignUpForm />
      </Suspense>
    </Route>
    <Route>
      <Suspense fallback={<LoadingPage />}>
        <NotFoundPage />
      </Suspense>
    </Route>
  </Switch>
);

export default AppRoutes;
