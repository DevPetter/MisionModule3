import React from "react"
import { Card } from "react-bootstrap"
import images from "../assets/images.jsx"
import "../style/AboutStyle.css"

export const About = () => {
  return (
    <>
    <div>
      <section className="header">
        <h1 className="title">About Petter.</h1>
      </section>

         <Card>
          <Card.Header>Información General</Card.Header>
          <img
            src={images.pedro}
            width={350}
            height={450}
            alt="Foto presentación personal"
          />
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>Nombre:</p>
              <footer className="blockquote-footer">
                Pedro Quiñones Paternina
              </footer>
            </blockquote>
          </Card.Body>

          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>Descripción:</p>
              <footer className="blockquote-footer">
                Con ganas de aprender mucho del mundo de la programación,
                curioso, apasionado y con ganas de seguir creciendo como persona
                y como profesional. De Monteria Colombia.
              </footer>
            </blockquote>
          </Card.Body>

          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>Tres cosas que he aprendido en este programa:</p>
              <footer className="blockquote-footer">
                <ul>
                  <li>He afianzado mucho sobre html, css, git.</li>
                  <li>
                    lo poco que se de react lo he aprendido en este bootcamp
                  </li>
                  <li>
                    He aprendido a tomar más confianza y documentarme cada vez
                    más sin temor al error
                  </li>
                </ul>
              </footer>
            </blockquote>
          </Card.Body>

          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>E-mail:</p>
              <footer className="blockquote-footer">
                petter0915@gmail.com
              </footer>
            </blockquote>
          </Card.Body>

          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>Link Github</p>
              <footer className="blockquote-footer">
                <a href="https://github.com/pedrojqp/MisionModule3">
                  /pedrojqp
                </a>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
