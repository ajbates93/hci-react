import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import { HCIRoot, Header, Footer, About } from "./containers";

const Main = () => (
    <Router history={browserHistory}>
        <Route path="/(index.html)" component={HCIRoot}>
            <IndexRoute component={HCIRoot} />
            <Route path="about" component={About} />
        </Route>
    </Router>
)


ReactDOM.render(
    <Main />, document.getElementById("root")
);