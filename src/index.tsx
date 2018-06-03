import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HCIRoot } from "./components/HCIRoot";

ReactDOM.render(
    <HCIRoot compiler="Typescript" framework="React" />,
    document.getElementById("example")
);