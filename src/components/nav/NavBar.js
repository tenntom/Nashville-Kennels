import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

const LogOut = () => {
    localStorage.removeItem("kennel_cutomer")
}

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="login" 
                onClick={
                    (event) => {
                    LogOut()
                }}> 
                Logout 
                </Link>
            </li>
        </ul>
    )
}