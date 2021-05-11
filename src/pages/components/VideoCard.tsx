import * as React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export interface IVideoCardProps {
    openInNewWindow?: boolean;
}

export function VideoCard({openInNewWindow}: IVideoCardProps) {

    const newWindowProps = openInNewWindow ? {
        target: '_blank',
        rel: 'noopener noreferrer'
    } : {};

    return (
        <Card style={{overflow: 'hidden'}} className="shadow-sm ordino-video-card">
            <iframe src="https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
            <Card.Body>
                <Card.Text>
                    Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes,
                    cell lines, and tissue samples based on a rich set of experimental and metadata.
        </Card.Text>
                <Card.Title >
                    <i className="mr-2 fas fa-check"></i>Features
                </Card.Title>
                <Card.Text>
                    You can find an overview of the main features
                    <Link {...newWindowProps} className="card-link" to="/features">&nbsp;here.</Link>
                </Card.Text>
                <Card.Title>
                    <i className="mr-2 fas fa-database"></i>Datasets
                </Card.Title>
                <Card.Text>
                    Many datasets have been integrated and are ready to explore.
                    <Link {...newWindowProps} className="card-link" to="/datasets">&nbsp;Read more about datasets.</Link>
                </Card.Text>
                <Card.Title>
                    <i className="mr-2 fas fa-mouse-pointer"></i>Tours
                </Card.Title>
                <Card.Text>
                    Another good way to learn about the main features of Ordino are our interactive tours that you can find
                    <Link {...newWindowProps} className="card-link" to="/tours">&nbsp;here.</Link>
                </Card.Text>
                <Card.Title>
                    <i className="mr-2 fas fa-book-open"></i>Publications
                </Card.Title>
                <Card.Text>
                    Ordino and its components have been described in several scientific publications.
                    <Link {...newWindowProps} className="card-link" to="/publication">&nbsp;More about the publications.</Link>
                </Card.Text>
            </Card.Body>
        </Card >
    );
}
