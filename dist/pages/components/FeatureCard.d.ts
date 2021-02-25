import * as React from 'react';
interface IFeatureCardProps {
    image: string;
    title: string;
    text: string;
    children?: React.ReactNode;
}
export declare function FeatureCard({ image, title, text }: IFeatureCardProps): JSX.Element;
export {};
