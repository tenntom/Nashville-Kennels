import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useHistory } from "react-router-dom"

export const AnimalDetail = (props) => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)
  const [animal, setAnimal] = useState({
    name:"",
    breed:"",
    location: {},
    customer: {}
  })

  const animalId = props.animal.id

  // setAnimal(props.animal) -- This doesn't work, but I don't know why.

  const history = useHistory()

  useEffect(() => {
    getAnimalById(animalId)
      .then(
        animalObject => setAnimal(animalObject)
      )
  },
    []
  )



  const handleRelease = () => {
    releaseAnimal(animal.id)
      .then(() => {
        history.push("/animals")
      })
  }

  return (
    <>
      <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location">Location: {animal.location.name}</div>
        <div className="animal__owner">Customer: {animal.customer.name}</div>
        <button onClick={handleRelease}>Release Animal</button>
        <button onClick={() => {
          history.push(`/animals/edit/${animal.id}`)
        }}>Edit</button>
      </section>
    </>
  )
}
