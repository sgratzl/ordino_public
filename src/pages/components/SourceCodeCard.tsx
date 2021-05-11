import React from 'react';
import {Card} from 'react-bootstrap';

export function SourceCodeCard() {
    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Text>
                    The source code of Ordino is available under the Mozilla Public License (MPL) at GitHub.
        </Card.Text>
                <Card.Text>
                    This application is part of Phovea, a platform for developing web-based visualization applications. For tutorials, API docs, and more information about the build and deployment process, see the documentation page.
        </Card.Text>
        Version: 7.0.3-20201119-011617
        <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>);
}
