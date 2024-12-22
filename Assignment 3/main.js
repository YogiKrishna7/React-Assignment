import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

const rootReact = document.getElementById("root");
const mainDOM = ReactDOM.createRoot(rootReact);

const LogoComponent = function () {
    return (
        <div className="main-logo">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F723%2F170%2Fpng-transparent-web-development-computer-icons-icon-design-mechanical-miscellaneous-text-orange.png&f=1&nofb=1&ipt=7dc6e72a4a4eeb37c1e2ff0a96c946befedecb9c17358539cf4c3f6d25e2ec86&ipo=images"></img>
        </div>
    )
}

const SearchComponent = function () {
    return (
        <div className="main-seacrhBar">
            <input type="text" placeholder="Search" />
        </div>
    )
}

const UserIconComponent = function () {
    return (
        <div className="main-userIcon">
            <img src="https://static.vecteezy.com/system/resources/previews/000/420/793/original/vector-users-icon.jpg" />
        </div>
    )
}

const HeaderComponent = function () {
    return (
        <>
            <div className="header">
                <LogoComponent />

                <SearchComponent />

                <UserIconComponent />
            </div>
        </>
    )
}

// React Element
const ReactElement = React.createElement("div",
    { className: "title" },
    React.createElement("h1", null, "H1"),
    React.createElement("h2", null, "H2"),
    React.createElement("h3", null, "H3")
);

// Element using JSX
const JSXElement = (
    <div className="title2"> {/* <- Passing Attributes To tag in JSX */}
        <h1>Hello H1</h1>
        <h2>Hello H2</h2>
        <h3>Hello H3</h3>
    </div>
);

// Element using Component
const FunctionalComponent = function () {
    return (
        <div>
            <h1>Hello H1</h1>
            <h2>Hello H2</h2>
            <h3>Hello H3</h3>
        </div>
    )
};

const FunctionalComponent2 = function () {
    return (
        <div>
            <h1>Hello Body 1</h1>
            <h2>Hello Body 2</h2>
            <h3>Hello Body 3</h3>
        </div>
    )
};

const CompositeComponent = function () {
    return (
        <>
            <FunctionalComponent />

            <FunctionalComponent2 />
        </>
    )
}

const BodyComponent = function () {
    return (
        <div>
            <h1>Nested React Element</h1>
            {ReactElement}

            <h1>Nested JSX Element</h1>
            {JSXElement}

            <h1>Functional React Component</h1>
            <FunctionalComponent />

            <h1>Composite Component</h1>
            <CompositeComponent />
        </div>
    )
}

const AppComponent = function () {
    return (
        <>
            <HeaderComponent />

            <BodyComponent />

        </>
    )
};


mainDOM.render(<AppComponent />);