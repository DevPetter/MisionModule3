import React from "react"
// import { Card, CardGroup} from "react-bootstrap"
import "../style/CardStyle.css"

// eslint-disable-next-line react/prop-types
export const HomeCard = ({ title, description, image }) => {
  return (
        <div className="cardProduct">
          <img className="image" variant="bottom" src={`${image}`} />
          <div>
            <h2>{title}</h2>
            <p>
            {description}
            </p>
          </div>
          <div>
            <small className="text-muted"> Espacio para cronometro</small>
          </div>
        </div>   
  
  )
}
