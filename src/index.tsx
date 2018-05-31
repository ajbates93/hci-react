import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HCIRoot } from "./components/Hello";

ReactDOM.render(
    <HCIRoot compiler="Typescript" framework="React" />,
    document.getElementById("example")
);