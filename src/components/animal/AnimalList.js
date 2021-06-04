import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { Link, useHistory } from "react-router-dom"


export const AnimalList = () => {
  const { getAnimals, animals } = useContext(AnimalContext)

  const history = useHistory()

  // Initialization effect hook -> Go get animal data
  useEffect(() => {
    getAnimals()
  }, [])

  return (
    <>
      <h1>Animals</h1>
      <button onClick={
        () => history.push("/animals/create")
      } className="animal__button">
        Add Pet
        </button>

      <button onClick={() => history.push("/animal/create")} classname="animal__button">
        Make Reservation
            </button>

      <div className="animals">
        {
          animals.map(animal => <Link to={`/animals/detail/${animal.id}`}
            className="animal"
            key={animal.id}>
            {animal.name}
          </Link>
          )
        }
      </div>
    </>
  )
}

