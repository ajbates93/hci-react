import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import { HCIRoot, Header, Footer, About } from "./containers";

const Main = () => (
    <BrowserRouter>
        <HCIRoot />
    </BrowserRouter>
)


ReactDOM.render(
    <Main />, document.getElementById("root")
);