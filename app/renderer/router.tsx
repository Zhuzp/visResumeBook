import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Root from './container/root/index';
import Resume from './container/resume/index';
import ROUTER from '@common/constants/router';

function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path={ROUTER.root} exact>
                    <Root />
                </Route>
                <Route path={ROUTER.resume} exact>
                    <Resume />
                </Route>
            </Switch>
            <Redirect to={ROUTER.root} />
        </HashRouter>
    )
}

export default Router;