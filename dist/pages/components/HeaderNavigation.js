import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import ordinoLogo from 'ordino_public/dist/assets/logos/ordino.svg';
export function HeaderNavigation() {
    // sticky="top"
    return (React.createElement(Navbar, { bg: "transparent", variant: "dark" },
        React.createElement(Navbar.Brand, { href: "#/" },
            React.createElement("img", { alt: "", src: ordinoLogo, width: "30", height: "30" }),
            ' ',
            "Ordino"),
        React.createElement(Navbar.Toggle, null),
        React.createElement(Navbar.Collapse, { className: "justify-content-end" },
            React.createElement(Nav, { as: "ul", className: "ml-auto" },
                React.createElement(Nav.Item, { as: "li", className: "px-3" },
                    React.createElement(NavLink, { to: "/news", className: "nav-link", activeClassName: "active" }, "What's new?")),
                React.createElement(Nav.Item, { as: "li", className: "px-3" },
                    React.createElement(NavLink, { to: "/features", className: "nav-link", activeClassName: "active" }, "Features")),
                React.createElement(Nav.Item, { as: "li", className: "px-3" },
                    React.createElement(NavLink, { to: "/datasets", className: "nav-link", activeClassName: "active" }, "Datasets")),
                React.createElement(Nav.Item, { as: "li", className: "px-3" },
                    React.createElement(Button, { href: "/app/", variant: "light" }, "Start Analysis"))))));
}
//# sourceMappingURL=HeaderNavigation.js.map