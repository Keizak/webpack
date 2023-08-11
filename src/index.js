import ReactDOM from "react-dom";
import React from "react"
import {TestContainer} from "./TestContainer";


const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(<TestContainer/>);
