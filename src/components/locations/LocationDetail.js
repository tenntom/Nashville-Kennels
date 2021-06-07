import React, { useContext, useEffect, useState } from "react"
import { LocationContext, getLocations } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)

    const [location, setLocation] = useState({
        id: "",
        name: "",
        address: "",
        animals: [],
        employees: []
    })

    const { locationId } = useParams();

    useEffect(() => {
        const thisLocation = locations.find(a => a.id === parseInt(locationId)) || { employees: [], animals: [] }

        setLocation(thisLocation)
    }, [locationId])

    const locationEmployees = location.employees
    const locationPets = location.animals

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <div className="location__employees">
                <h3>Employees</h3>
                {
                    locationEmployees.map((employee) => { 
                        return <h3>{employee.name}</h3>})
                }
            </div>
            <div className="location__animals">
                <h3>Pets:</h3>
                {
                    locationPets.map((animal) => {
                        return <h3>{animal.name}</h3>
                    })
                }

            </div>
        </section>
    )
}