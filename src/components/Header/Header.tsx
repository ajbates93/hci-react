import * as React from 'react';

export interface HeaderProps {
    compiler: string;
    framework: string;
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <header>
                <h1>HCI York using {this.props.compiler} and {this.props.framework}!</h1>
            </header>
        )
    }
}