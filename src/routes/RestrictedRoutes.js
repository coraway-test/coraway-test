import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { UI_ROUTES } from "../constants/routes";

const Home = lazy(() => import("../pages/Home"));
const Result = lazy(() => import("../pages/Result"));
const Page404 = lazy(() => import("../pages/Page404"));
const Login = lazy(() => import("../pages/Auth/Login"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));
const DetailPage = lazy(() => import("../pages/DetailPage"));
const MailChimpForm = lazy(() => import("../pages/Auth/MailChimpForm"));

const RestrictedRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route
          exact
          path={UI_ROUTES.root}
          render={props => <Home {...props} />}
        />
        <Route
          exact
          path={UI_ROUTES.search_results}
          render={props => <Result {...props} />}
        />
        <Route
          exact
          path={UI_ROUTES.details_page}
          render={props => <DetailPage {...props} />}
        />
        <Route
          exact
          path={UI_ROUTES.login}
          render={props => <Login {...props} />}
        />
        <Route
          exact
          path={UI_ROUTES.signUp}
          render={props => <SignUp {...props} />}
        />
        <Route
          exact
          path={UI_ROUTES.mailChimp}
          render={props => <MailChimpForm {...props} />}
        />
        <Route path="*" render={props => <Home {...props} />} />
      </Switch>
    </Suspense>
  );
};

export default RestrictedRoutes;
export { RestrictedRoutes };
