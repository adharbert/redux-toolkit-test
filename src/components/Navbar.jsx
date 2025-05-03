import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">My App</NavLink>
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/users" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Users</NavLink></li>
                        <li className="nav-item"><NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Products</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar




