import * as React from 'react';

export interface FooterProps {

}

export class Footer extends React.Component<FooterProps, {}> {
    render() {
        return (
            <footer>
                <p>This area will contain things like privacy policy, terms and conditions, affiliations etc.</p>
            </footer>
        )
    }
}