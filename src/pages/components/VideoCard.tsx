import * as React from 'react';
import {Card} from 'react-bootstrap';
import {DualLink} from './DualLink';

interface IVideoCardProps {
    openInNewWindow: boolean;
}

export function VideoCard({openInNewWindow}: IVideoCardProps) {
    return (
        <Card style={{overflow: 'hidden'}} className="shadow-sm">
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
                    <DualLink component={Card.Link} openInNewWindow={openInNewWindow} to="/features">&nbsp;here.</DualLink>
                </Card.Text>
                <Card.Title>
                    <i className="mr-2 fas fa-database"></i>Datasets
                </Card.Title>
                <Card.Text>
                    Many datasets have been integrated and are ready to explore.
                    <DualLink component={Card.Link} to="/datasets">&nbsp;Read more about datasets.</DualLink>
                </Card.Text>
                <Card.Title>
                    <i className="mr-2 fas fa-mouse-pointer"></i>Tours
                </Card.Title>
                <Card.Text>
                    Another good way to learn about the main features of Ordino are our interactive tours that you can find
                    <DualLink component={Card.Link} openInNewWindow={openInNewWindow} to="/tours">&nbsp;here.</DualLink>
                </Card.Text>
                <Card.Title>
                    <i className="mr-2 fas fa-book-open"></i>Publications
                </Card.Title>
                <Card.Text>
                    Ordino and its components have been described in several scientific publications.
                    <DualLink component={Card.Link} openInNewWindow={openInNewWindow} to="/publication">&nbsp;More about the publications.</DualLink>
                </Card.Text>
            </Card.Body>
        </Card >
    );
}
