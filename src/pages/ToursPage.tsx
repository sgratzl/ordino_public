import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';
import {TourCard} from 'ordino';
import tour1Img from 'ordino/dist/assets/tour_1.png';

export function ToursPage() {
    return (
        <>
            <HeaderNavigation fixed="top" />
            <div className="mt-9 mb-6 container">
                <p className="lead text-ordino-gray-4">Learn more about Ordino by taking an interactive guided tour</p>
                <h4 className="text-start mt-4 mb-3 d-flex align-items-center"><i className="me-2 ordino-icon-1 fas fa-chevron-circle-right" ></i> Beginner</h4>
                <div className="mb-4 row row-cols-md-3">
                    <TourCard title="Ordino Welcome Tour" text="Learn the basic features of Ordino in a short welcome tour." image={tour1Img} href="/app/#tour=ordinoWelcomeTour"></TourCard>
                    <TourCard title="Overview of Start Menu" text="This tour provides an overview of the Ordino start menu." image={tour1Img} href="/app/#tour=ordinoStartMenuTour"></TourCard>
                </div>
                <h4 className="text-start mt-4 mb-3 d-flex align-items-center "><i className="me-2 ordino-icon-1 fas fa-chevron-circle-right" ></i> Advanced</h4>
                <div className="row row-cols-md-3">
                    <TourCard title="Adding data Columns" text="Learn how to add data columns to rankings in Ordino." image={tour1Img} href="/app/#tour=ordinoAddColumnToGeneListTour"></TourCard>
                </div>
            </div>
            <OrdinoFooter />
        </>
    );
}
