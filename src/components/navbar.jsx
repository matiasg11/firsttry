import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

//This component only renders values but does not have any functions. It does not have a state and only takes the values via props.
//Stateless Functional Component => A function that only renders

//I have to remove this from the call to the props values and use props as a parameter

//We can use object destructuring by only passing the totalCounters property from the props. It has to go between curly braces and it can be directly called afterwards

const NavBar = () => {
    // className NavBar extends Component {
    //     state = {};
    // render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Welcome
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/movies">
                            Movies <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers">
                            Customers
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link disabled" to="#">
                            Disabled
                        </Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
