import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { Link, useHistory } from "react-router-dom"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])


    return (
        <>
            <h2>Locations</h2>
            <button onClick={
                () => history.push("/locations/create")
            }>
                Add Location
        </button>
            <div className="locations">
                {
                    locations.map(location => <div className="location" key={location.id}><Link to={`/locations/detail/${location.id}`}>
                        <h3>{location.name}</h3>
                    </Link>
                        <p>{`This location has ${location.animals.length} animals and ${location.employees.length} employees.`}</p>
                    </div>
                    )
                }
            </div>
        </>
    )
}