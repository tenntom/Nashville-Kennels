import React, {useContext, useEffect, useState} from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)

    const [location, setLocation ] = useState({
        name: "",
        address:"",
        animals:[], 
        employees:[]
    })

    const {locationId } = useParams();

    useEffect(() => {
        const thisLocation = locations.find(a => a.id === parseInt(locationId))
        setLocation(thisLocation)
    }, [locationId])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
        </section>
    )
}