import * as React from 'react';
import {Header} from "./Header";
import {Footer} from "./Footer";

export interface HCIRootProps {
}

export class HCIRoot extends React.Component<HCIRootProps, {}> {
    render() {
        return (
            <div id="container">
                <Header />
                <h3>Some sample header</h3>
                <p>Some sample text</p>
                <Footer />
            </div>
        )
    }
}