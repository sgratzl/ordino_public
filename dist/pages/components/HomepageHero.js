import * as React from 'react';
import { HeaderNavigation } from './HeaderNavigation';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export function OrdinoHero() {
    const [modalShow, setModalShow] = React.useState(false);
    return (React.createElement("div", { id: "ordino-hero" },
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row ordino-hero-claim" },
                React.createElement("div", { className: "col" },
                    React.createElement("p", null, "Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a rich set of experimental and metadata."))),
            React.createElement("div", { className: "row ordino-hero-actions" },
                React.createElement("div", { className: "col text-center" },
                    React.createElement(Button, { variant: "link", size: "lg", onClick: () => setModalShow(true) },
                        React.createElement("span", { className: "fa-stack" },
                            React.createElement("i", { className: "far fa-circle fa-stack-2x" }),
                            React.createElement("i", { className: "fas fa-play fa-stack-1x" })),
                        "Watch intro video")),
                React.createElement("div", { className: "col text-center" },
                    React.createElement(Link, { to: "/tours", className: "btn btn-link btn-lg" },
                        React.createElement("span", { className: "fa-stack" },
                            React.createElement("i", { className: "far fa-circle fa-stack-2x" }),
                            React.createElement("i", { className: "fas fa-question fa-stack-1x" })),
                        "Learn more about Ordino"))),
            React.createElement("div", { className: "row ordino-hero-image" },
                React.createElement("div", { className: "col" }, "Image"))),
        React.createElement(IntroVideoModal, { show: modalShow, onHide: () => setModalShow(false) })));
}
function IntroVideoModal(props) {
    return (React.createElement(Modal, Object.assign({}, props, { dialogClassName: "ordino-intro-video-modal", "aria-labelledby": "ordino-intro-video-modal" }),
        React.createElement(Modal.Header, { closeButton: true },
            React.createElement(Modal.Title, { id: "ordino-intro-video-modal" }, "Introduction to Ordino")),
        React.createElement(Modal.Body, null,
            React.createElement("iframe", { width: "1280", height: "720", src: "https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture", allowFullScreen: true }))));
}
//# sourceMappingURL=HomepageHero.js.map