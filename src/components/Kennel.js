import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Kennel.css";

const Opening = () => (
  <header className="mainPageHeader">
  <h2>Nashville Kennels</h2>
  <small>Loving care when you're not there.</small>
  <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
  </address>
  </header>
)

export const Kennel = () => (
  <>
  <Opening />
  `
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);












// import React from "react"
// import "./Kennel.css"
// import { AnimalProvider } from "./animal/AnimalProvider.js"
// import { EmployeeList } from "./employees/EmployeeList.js"
// import { LocationList } from "./locations/LocationList"
// import { CustomerList } from "./customers/CustomerList"
// import { AnimalList } from "./animal/AnimalList"
// import { EmployeeProvider } from "./employees/EmployeeProvider"
// import { CustomerProvider } from "./customers/CustomerProvider"
// import { LocationProvider } from "./locations/LocationProvider"

// export const Kennel = () => (
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>
//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>

//         <h2>Animals</h2>
//         <article className="animals">
//             <AnimalProvider>
//                 <AnimalList />
//             </AnimalProvider>
//         </article>

//         <h2>Employees</h2>
//         <article className="employees">
//             <EmployeeProvider>
//                 <EmployeeList />
//             </EmployeeProvider>
//         </article>

//         <h2>Locations</h2>
//         <article className="locations">
//             <LocationProvider>
//                 <LocationList />
//             </LocationProvider>
//         </article>

//         <h2>Customers</h2>
//         <article className="customers">
//             <CustomerProvider>
//                 <CustomerList />
//             </CustomerProvider>
//         </article>
//     </>
// )