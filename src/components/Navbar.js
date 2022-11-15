import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm sticky-top">
        <div className="container-fluid">
            <NavLink className="navbar-brand dance-font fw-bold my-2" to="/">Fake
                <span className="text-warning">Products</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#fakeproduct-navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="fakeproduct-navbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item px-3">
                        <NavLink   className="nav-link px-3" to="/">Products</NavLink>
                    </li>
                    <li className="nav-item px-3">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </li>
                    <li className="nav-item px-3">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </li>
                </ul>
              </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
