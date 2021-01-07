import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import ordinoLogo from 'ordino_public/dist/assets/logos/ordino.svg';
export function Navigation() {
    return (React.createElement(Navbar, { bg: "transparent", variant: "light", sticky: "top" },
        React.createElement(Navbar.Brand, { href: "#/" },
            React.createElement("img", { alt: "", src: ordinoLogo, width: "30", height: "30", className: "d-inline-block align-top" }),
            ' ',
            "Ordino"),
        React.createElement(Navbar.Toggle, null),
        React.createElement(Navbar.Collapse, { className: "justify-content-end" },
            React.createElement(Nav, { className: "ml-auto" },
                React.createElement(NavLink, { to: "/news", activeClassName: "active" }, "What's new?"),
                React.createElement(NavLink, { to: "/features", activeClassName: "active" }, "Features"),
                React.createElement(NavLink, { to: "/datasets", activeClassName: "active" }, "Datasets")))));
}
//# sourceMappingURL=Navigation.js.map