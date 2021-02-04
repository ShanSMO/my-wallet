import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';
import TopNav from './../top-nav/TopNav';

export function ContainerLayout() {

    let { path, url } = useRouteMatch();

    return (
        <Router>
            <TopNav />
            <Switch>
                <Route path={`${path}` + 'dashboard'}>
                    Dasboard
                        </Route>
                <Route path='/profile'>
                    Profile
                        </Route>
            </Switch>
        </Router>
    );

}