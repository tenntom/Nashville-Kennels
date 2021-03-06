import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "../employees/EmployeeProvider"
import "./Employee.css"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  const [Employee, setEmployee] = useState({
    name: "",
    position:"",
    locationId: 0,
  });

  const history = useHistory();

  useEffect(() => {
    getLocations()
  }, [])


  const handleControlledInputChange = (event) => {
 
    const newEmployee = { ...Employee }
 
    newEmployee[event.target.id] = event.target.value

    setEmployee(newEmployee)
  }

  const handleClickSaveEmployee = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const locationId = parseInt(Employee.locationId)

    if (locationId === 0 || Employee.position === null) {
      window.alert("Please select a position and location.")
    } else {

      const newEmployee = {
        name: Employee.name,
        breed: Employee.breed,
        locationId: locationId,
        position: Employee.position
      }
      addEmployee(newEmployee)
        .then(() => history.push("/employees"))
    }
  }

  return (
    <form className="EmployeeForm">
      <h2 className="EmployeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={Employee.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" required autoFocus className="form-control" placeholder="Employee Position" value={Employee.position} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select name="locationId" id="locationId" className="form-control" value={Employee.locationId} onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
          </button>
    </form>
  )
}