import React from "react";
import ReactDOM from "react-dom/client";

// JS Code to print Hello World
var h2 = document.createElement("h2");
h2.innerHTML = "Hello World with JavaScript";

var rootElement = document.getElementById("js");
rootElement.appendChild(h2);

// React to render Hello World

const htmlRoot = document.getElementById("react");
const rootReact = ReactDOM.createRoot(htmlRoot);

const reactElement = React.createElement("div", null,
    React.createElement("h3", null, "Hello World with React"),
    React.createElement("p", null, "nested element in react")
);

rootReact.render(reactElement); 