import React from 'react';
import { Route, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

// REDUX
import { isLoginSelector } from './app_state/login';
import { public_route, private_route } from './config/route';

import { ROUTES } from './config/router_app';

function App() {
    return (
        <Router>
            <Switch>
                {public_route.map(route => (
                    <Route key={route.path} exact path={route.path}>
                        <route.Com />
                    </Route>
                ))}
                {private_route.map(route => (
                    <PrivateRoute key={route.path} exact path={route.path}>
                        <route.Com />
                    </PrivateRoute>
                ))}
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
};

export default App;


function PrivateRoute({ children, ...rest }) {
    const isLogin = useSelector(isLoginSelector);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLogin ? (children) : (
                    <Redirect
                        to={{
                            pathname: `/${ROUTES.LOGIN}`,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

