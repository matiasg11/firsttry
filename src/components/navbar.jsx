import React, { Component } from "react";

//This component only renders values but does not have any functions. It does not have a state and only takes the values via props.
//Stateless Functional Component => A function that only renders

//I have to remove this from the call to the props values and use props as a parameter

//We can use object destructuring by only passing the totalCounters property from the props. It has to go between curly braces and it can be directly called afterwards

const NavBar = ({ totalCounters }) => {
    // class NavBar extends Component {
    //     state = {};
    // render() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
