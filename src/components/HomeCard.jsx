import React from "react"
import { Card, CardGroup} from "react-bootstrap"

// eslint-disable-next-line react/prop-types
export const HomeCard = ({ title, description, image }) => {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant="bottom" src={`${image}`} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="bottom" src={`${image}`} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">3 mins ago</small>
          </Card.Footer>
        </Card>

       
        <Card>
          <Card.Img variant="bottom" src={`${image}`} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> 3 mins ago</small>
          </Card.Footer>
        </Card>

      </CardGroup>
    </>
  )
}
