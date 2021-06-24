import * as React from 'react';

interface IFeatureCardProps {
    image?: string;
    title: string;
    /**
     * Add card text as children
     */
    children?: React.ReactNode;
}

export function FeatureCard({image, title, children}: IFeatureCardProps) {
    return (
        <div className="col mt-4">
            <div className="card shadow-sm h-100">
                <div className="card-body p-3">
                    <h5 className="card-title">{title}</h5>
                    {children}
                </div>
            </div>
        </div>
    );
}
