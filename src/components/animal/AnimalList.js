import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalDetail } from "./AnimalDetail"
import "./Animal.css"
import { Link, useHistory } from "react-router-dom"


export const AnimalList = () => {
  const { getAnimals, animals, searchTerms } = useContext(AnimalContext)

  const [filteredAnimals, setFiltered] = useState([])

  const history = useHistory()

  useEffect(() => {
    getAnimals()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

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
          filteredAnimals.map((animal) => {
            return <AnimalDetail key={animal.id} animal={animal.id} />
          })
        }
      </div>
    </>
  )
}

{/* {
          animals.map(animal => <Link to={`/animals/detail/${animal.id}`}
            className="animal"
            key={animal.id}>
            {animal.name}
          </Link>
          )
        }  */
}
