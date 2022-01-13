import React, { useEffect, useState } from "react"
import { HomeCard } from "../components/HomeCard"

export const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        console.log(data)
      })
  }, [])
  return (
    <>
      <div className="header">
        <h1 className="title">About Products</h1>
      </div>

      {users.map(({ id, title, description, image }) => (
        <HomeCard
          key={id}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </>
  )
}
