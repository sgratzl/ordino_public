import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export function WelcomePage() {
    return (React.createElement(Router, null,
        React.createElement("div", null,
            React.createElement("nav", null,
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/" }, "Home")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/about" }, "About")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/users" }, "Users")))),
            React.createElement(Switch, null,
                React.createElement(Route, { path: "/about" },
                    React.createElement(About, null)),
                React.createElement(Route, { path: "/users" },
                    React.createElement(Users, null)),
                React.createElement(Route, { path: "/" },
                    React.createElement(Home, null))))));
}
function Home() {
    return React.createElement("h2", null, "Home");
}
function About() {
    return React.createElement("h2", null, "About");
}
function Users() {
    return React.createElement("h2", null, "Users");
}
//# sourceMappingURL=WelcomePage.js.map