import React from 'react'
import { Card, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap'

export function PersonCard({ person }) {

    return (
        <Card className="card">
            <CardBody>
                <CardTitle tag="h4">{`${person.first_name} ${person.last_name}`}</CardTitle>
                <CardSubtitle className="indent" tag="h5">{person.company}</CardSubtitle>
                <CardText className="info">
                    <div>
                        <div>
                            Address:
                        </div>
                        <div className="indent">{person.address1}</div>
                        <div className="indent">
                            {`${person.city}, ${person.state} ${person.zip}`}
                        </div>
                    </div>
                    <div>
                        <div>Phone:</div>
                        <div className="indent">{person.phone}</div>
                    </div>
                    <div>
                        <div>Email:</div>
                        <div className="indent">{person.email}</div>
                    </div>
                </CardText>
            </CardBody>
        </Card>
    )
}