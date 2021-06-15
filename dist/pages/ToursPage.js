import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, useAsync } from 'ordino';
import { ToursSection } from 'ordino';
import { PluginRegistry, I18nextManager } from 'phovea_core';
import { TourUtils } from 'tdp_core';
export function ToursPage() {
    const loadTours = React.useMemo(() => async () => {
        // initialize i18n now because it hasn't been initialized before on the homepage
        // and we use language strings in the `ToursSection` and `TourCard` component
        await I18nextManager.getInstance().initI18n();
        const tourEntries = PluginRegistry.getInstance().listPlugins(TourUtils.EXTENSION_POINT_TDP_TOUR).map((d) => d);
        return Promise.all(tourEntries.map((tour) => tour.load()));
    }, []);
    const { status, value: tours } = useAsync(loadTours);
    const beginnerTours = tours === null || tours === void 0 ? void 0 : tours.filter((tour) => tour.desc.level === 'beginner');
    const advancedTours = tours === null || tours === void 0 ? void 0 : tours.filter((tour) => tour.desc.level === 'advanced');
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "position-relative pt-6" },
            React.createElement("div", { className: "ordino-container" },
                status === 'success' ?
                    React.createElement("div", { className: "mt-9 mb-6 container tours-tab" },
                        React.createElement("p", { className: "lead text-ordino-gray-4" }, "Learn more about Ordino by taking an interactive guided tour"),
                        beginnerTours ?
                            React.createElement(ToursSection, { level: "beginner", tours: beginnerTours, hrefBase: "/app/#tour={id}" })
                            : null,
                        advancedTours ?
                            React.createElement(ToursSection, { level: "advanced", tours: advancedTours, hrefBase: "/app/#tour={id}" })
                            : null)
                    : null,
                React.createElement(OrdinoFooter, null)))));
}
//# sourceMappingURL=ToursPage.js.map