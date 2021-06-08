import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Location.css"

export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({
        name: "",
        address: "",
    });


    const history = useHistory();

    const handleControlledInputChange = (event) => {
        event.preventDefault()
        const newLocation = { ...location }
        newLocation[event.target.id] = event.target.value
        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        event.preventDefault()

        if (location.name === "" || location.address === "") {
            window.alert("Please enter a location name and address.")
        } else {
            const newLocation = {
                name: location.name,
                address: location.address
            }

            addLocation(newLocation)
                .then(() => history.push(`/locations/`))
        }
    }

    return (
        <form className="LocationForm">
            <h2 className="LocationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location address:</label>
                    <input type="text" id="address" className="form-control" placeholder="Location address" value={location.address} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={event => {
                    handleClickSaveLocation(event)
                }}>
                Save Location
            </button>
        </form>
    )
}
