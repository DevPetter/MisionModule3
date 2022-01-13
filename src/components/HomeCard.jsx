import React from "react"
import { Card, CardGroup} from "react-bootstrap"
import "../style/CardStyle.css"

// eslint-disable-next-line react/prop-types
export const HomeCard = ({ title, description, image }) => {
  return (
    <>
      <CardGroup>
        <Card className="cardProduct">
          <Card.Img className="image" variant="bottom" src={`${image}`} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Espacio para cronometro</small>
          </Card.Footer>
        </Card>   
    
      </CardGroup>
    </>
  )
}
