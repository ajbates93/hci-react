import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Header} from "./Header";
import {Footer} from "./Footer";

export interface HCIRootProps {
}

export class HCIRoot extends React.Component<HCIRootProps, {}> {
    render() {
        return (
            <div id="container">
                <Header />
                <main>
                    <Switch>
                        <Route />
                    </Switch>
                </main>
                <p>Some sample text</p>
                <Footer />
            </div>
        )
    }
}