import * as React from 'react';

export interface HeaderProps {
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <header>
                <h1>HCI York</h1>
            </header>
        )
    }
}