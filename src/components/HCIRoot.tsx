import * as React from 'react';

export interface HCIRootProps {
    compiler: string;
    framework: string;
}

export class HCIRoot extends React.Component<HCIRootProps, {}> {
    render() {
        return <h1>HCI York using {this.props.compiler} and {this.props.framework}!</h1>;
    }
}