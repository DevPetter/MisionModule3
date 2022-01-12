import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link>
            <Link class="nav-link btn btn-outline-success" to="/">
              Home
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link class="nav-link btn btn-outline-success" to="/about">
              About
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
