import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Link, useHistory } from "react-router-dom"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    const history = useHistory()

    useEffect(() => {
        getEmployees()
    },[])

    return (
        <>
        <h2>Employees</h2>
        <button onClick={
            () => history.push("/employees/create")
        }>
            Add Employee
        </button>
        <div className="employees">
            {
                employees.map(employee => <Link to={`/employees/detail/${employee.id}`} className="employee"
                key = {employee.id}>
                    <h3>{employee.name}</h3>
                </Link>
                )
                }
        </div>
        
{/*         
        
        
        
        
        <section className="employees">
            {console.log("EmployeeList: Render", employees)}
            {
                employees.map(employee => {
                    return (
                        <div className="employee" id={`employee--${employee.id}`} key={employee.id}>
                            <div className="employee__name">
                                Name: {employee.name}
                            </div>
                            <div className="employee__position">
                                Position: {employee.position}
                            </div>
                            <div className="employee__location">
                                Location: {employee.location.address}
                            </div>
                        </div>
                    )
                })
            }
        </section> */}
        </>
    )
}