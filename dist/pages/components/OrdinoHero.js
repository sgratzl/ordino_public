import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ordinoHero from 'ordino_public/dist/assets/ordino-hero.svg';
import { HeaderNavigation } from 'ordino';
export function OrdinoHero() {
    const [modalShow, setModalShow] = React.useState(false);
    return (React.createElement("div", { className: "ordino-hero" },
        React.createElement(HeaderNavigation, { bg: "transparent" }),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row ordino-hero-claim my-4" },
                React.createElement("div", { className: "col text-center" },
                    React.createElement("p", null, "Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a rich set of experimental and metadata."))),
            React.createElement("div", { className: "row ordino-hero-actions my-4" },
                React.createElement("div", { className: "col text-center" },
                    React.createElement(Button, { variant: "link", size: "lg", onClick: () => setModalShow(true) },
                        React.createElement("i", { className: "fas fa-play" }),
                        "Watch intro video"),
                    React.createElement(IntroVideoModal, { show: modalShow, onHide: () => setModalShow(false) })),
                React.createElement("div", { className: "col text-center" },
                    React.createElement(Link, { to: "/help", className: "btn btn-link btn-lg" },
                        React.createElement("i", { className: "fas fa-question" }),
                        "Learn more about Ordino"))),
            React.createElement("div", { className: "row ordino-hero-image mt-5" },
                React.createElement("div", { className: "col" },
                    React.createElement("img", { src: ordinoHero, alt: "Screenshot of an analysis with Ordino" }))))));
}
function IntroVideoModal(props) {
    return (React.createElement(Modal, Object.assign({}, props, { dialogClassName: "ordino-intro-video-modal", "aria-labelledby": "ordino-intro-video-modal" }),
        React.createElement(Modal.Header, { closeButton: true },
            React.createElement(Modal.Title, { id: "ordino-intro-video-modal" }, "Introduction to Ordino")),
        React.createElement(Modal.Body, null,
            React.createElement("iframe", { width: "1280", height: "720", src: "https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture", allowFullScreen: true }))));
}
//# sourceMappingURL=OrdinoHero.js.map