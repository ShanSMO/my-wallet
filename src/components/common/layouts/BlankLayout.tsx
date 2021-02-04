import { BrowserRouter as Router, Switch, Route,useRouteMatch } from 'react-router-dom';
import Login from './../../regular/login/Login';
import Register from '../../regular/register/Register';

export function BlankLayout() {

    let { path, url } = useRouteMatch();

    return (
        <Router>
            <Switch>
                <Route exact path={`${path}` + "/login"} component={Login} />
                <Route exact path={`${path}` + "/register"} component={Register} />
            </Switch>
        </Router>
    );
}
