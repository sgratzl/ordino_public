import * as React from 'react';
import { Link } from 'react-router-dom';
import ordinoHero from 'ordino_public/dist/assets/ordino-hero.svg';
import { HeaderNavigation } from 'ordino';
const INTRO_VIDEO_MODAL_ID = 'ordino-intro-video-modal';
export function OrdinoHero() {
    const [modalIsClosed, setModalIsClosed] = React.useState(true);
    const videoRef = React.useRef(null);
    const handleCloseModal = (event) => {
        const target = event.target;
        // backdrop === modal node
        if (target.id === INTRO_VIDEO_MODAL_ID) {
            setModalIsClosed(true);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "ordino-hero" },
            React.createElement(HeaderNavigation, { bg: "transparent" }),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row ordino-hero-claim my-4" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("p", null, "Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a rich set of experimental and metadata."))),
                React.createElement("div", { className: "row ordino-hero-actions my-4" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("button", { type: "button", className: "btn btn-link btn-lg", onClick: () => setModalIsClosed(false), "data-bs-toggle": "modal", "data-bs-target": `#${INTRO_VIDEO_MODAL_ID}` },
                            React.createElement("i", { className: "fas fa-play" }),
                            "Watch intro video")),
                    React.createElement("div", { className: "col text-center" },
                        React.createElement(Link, { to: "/help", className: "btn btn-link btn-lg" },
                            React.createElement("i", { className: "fas fa-question" }),
                            "Learn more about Ordino"))),
                React.createElement("div", { className: "row ordino-hero-image mt-5" },
                    React.createElement("div", { className: "col" },
                        React.createElement("img", { src: ordinoHero, alt: "Screenshot of an analysis with Ordino" }))))),
        React.createElement("div", { className: "modal", id: INTRO_VIDEO_MODAL_ID, onClick: handleCloseModal, "aria-labelledby": "ordino-intro-video-modal-title", "aria-hidden": "true" },
            React.createElement("div", { className: "modal-dialog ordino-intro-video-modal" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header" },
                        React.createElement("div", { className: "modal-title h4" }, "Introduction to Ordino"),
                        React.createElement("button", { type: "button", className: "btn-close", onClick: () => setModalIsClosed(true), "data-dismiss": "modal", "aria-label": "Close" })),
                    React.createElement("div", { className: "modal-body" },
                        React.createElement("p", null, "The video was produced with an earlier Ordino version and shows a slightly different user interface compared to the current app."),
                        !modalIsClosed && React.createElement("iframe", { ref: videoRef, width: "1280", height: "720", src: "https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture", allowFullScreen: true })))))));
}
//# sourceMappingURL=OrdinoHero.js.map