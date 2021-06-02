import * as React from 'react';

export function DisclaimerCard() {
    return (
        <div className="card shadow-sm p-2">
            <div className="card-body">
                <p className="card-text">
                    The information provided by Johannes Kepler University Linz, Boehringer Ingelheim RCV GmbH {'&'} Co KG, and datavisyn GmbH (“we,” “us” or “our”) on <a href="https://ordino.calyedoapp.org" target="_blank" rel="noopener noreferrer">https://ordino.calyedoapp.org</a> (the “Site”) is for general research purposes and non-commercial use only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, expressed or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
                </p>
                <p className="card-text">
                    Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
                </p>
                <p className="card-text">
                    The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through or embedded within the Site.
                </p>
                <p className="card-text">
                    The Site cannot and does not contain medical or health advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
                </p>
            </div>
        </div>
    );
}
