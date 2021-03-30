import * as React from 'react';
interface IFeatureCardProps {
    image?: string;
    title: string;
    /**
     * Add card text as children
     */
    children?: React.ReactNode;
}
export declare function FeatureCard({ image, title, children }: IFeatureCardProps): JSX.Element;
export {};
