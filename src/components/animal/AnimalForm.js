import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import "./Animal.css"
import { useHistory, useParams } from 'react-router-dom'

export const AnimalForm = () => {
  const { addAnimal, updateAnimal, getAnimalById } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  const [animal, setAnimal] = useState({})

  const [IsLoading, setIsLoading] = useState(true);

  const { animalId } = useParams();

  const history = useHistory();

  // useEffect(() => {
  //   getCustomers().then(getLocations)
  // }, [])


  const handleControlledInputChange = (event) => {

    const newAnimal = { ...animal }

    newAnimal[event.target.id] = event.target.value

    setAnimal(newAnimal)
  }

  const handleSaveAnimal = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const locationId = parseInt(animal.locationId)
    const customerId = parseInt(animal.customerId)

    if (locationId === 0 || customerId === 0) {
      window.alert("Please select a location and a customer")
    } else {


      setIsLoading(true);
      if (animalId) {
        //If editing
        updateAnimal({
          id: animal.id,
          name: animal.name,
          locationId: parseInt(animal.locationId),
          customerId: parseInt(animal.customerId)
        })
          .then(() => history.push(`/animals/detail/${animal.id}`))
      } else {
        //If new
        addAnimal({
          name: animal.name,
          locationId: parseInt(animal.locationId),
          customerId: parseInt(animal.customerId)
        })
          .then(() => history.push("/animals"))
      }
    }
  }

  useEffect(() => {
    getCustomers().then(getLocations).then(() => {
      if (animalId) {
        getAnimalById(animalId)
          .then(animal => {
            setAnimal(animal)
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    })
  }, [])
  


  //Invoke addAnimal passing the new animal object as an argument
  //Once complete, change the url and display the animal list

  //   const newAnimal = {
  //     name: animal.name,
  //     breed: animal.breed,
  //     locationId: locationId,
  //     customerId: customerId
  //   }
  //   addAnimal(newAnimal)
  //     .then(() => history.push("/animals"))
  // }
  //   }

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">Animal Information</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Animal name" value={animal.name} onChange={handleControlledInputChange}
            defaultValue={animal.name} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal breed:</label>
          <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select name="locationId" id="animalLocation" className="form-control" value={animal.locationId} onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select name="customer" id="customerId" className="form-control" value={animal.customerId} onChange={handleControlledInputChange}>
            <option value="0">Select a customer</option>
            {customers.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary"
        disabled={IsLoading}
        onClick={event => {
          handleSaveAnimal()
        }}>
        {animalId ? <>Save Animal</> : <>Add Animal</>} </button>
    </form>
  )
}