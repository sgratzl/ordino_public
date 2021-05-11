import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';

export function TermsOfUseCard() {
    return (
        <Card className="shadow-sm">
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>This instance of Ordino is intended for scientific research and non-commercial use only.</ListGroup.Item>
                    <ListGroup.Item>Ordino cannot be used for the provision of medical advice.</ListGroup.Item>
                    <ListGroup.Item>We expect attribution (e.g. in publications, services or products) for any of Ordino's online services, databases or software in accordance with good scientific practice.</ListGroup.Item>
                    <ListGroup.Item>Ordino provides data collated from the public domain with references to their sources. We cannot guarantee the accuracy of any data or databases nor their suitability for user purposes.</ListGroup.Item>
                    <ListGroup.Item>The original data in Ordino may be subject to rights claimed by third parties, including but not limited to, patent, copyright, other intellectual property rights, biodiversity-related access and benefit-sharing rights. It is the responsibility of users of Ordino to ensure that their exploitation of the data does not infringe any of the rights of such third parties.</ListGroup.Item>
                    <ListGroup.Item>We are not liable to you or third parties claiming through you, for any loss or damage.</ListGroup.Item>
                    <ListGroup.Item>We do not accept responsibility for the consequences of any breach of the confidentiality of the Ordino Site by third parties.</ListGroup.Item>
                    <ListGroup.Item>We accept no responsibility for the consequences of any temporary or permanent discontinuity in service of this Site.</ListGroup.Item>
                    <ListGroup.Item>Users of Ordino agree not to attempt to use any Ordino computers, files or networks apart from through the service interfaces provided.</ListGroup.Item>
                    <ListGroup.Item>Any attempt to use Ordino to a level that prevents, or looks likely to prevent, Ordino providing services to others, will result in the use being blocked.</ListGroup.Item>
                    <ListGroup.Item>Any feedback on Ordino will be treated as non-confidential unless the individual or organization providing the feedback states otherwise.</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

