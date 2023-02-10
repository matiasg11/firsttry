import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Routes>
                        <Route path="/movies" element={Movies} />
                        <Route path="/rentals" element={Rentals}></Route>
                        <Route path="/customers" element={Customers}></Route>
                        <Route path="/not-found" element={NotFound}></Route>
                        <Navigate from="/" exact to="/movies" />
                        <Navigate to="/not-found" />
                    </Routes>
                </main>
            </React.Fragment>
        );
    }
}
//Now we start with routing
//Add a NavLink componetn with Movies, Customers and Rentals
//Customers and Rentals must only show a title
//If any other route (invalid) => go to not-found
//If you go to the root, redirected to movies.
//Click on a movie => go to /movies/id
//Menues have to be highlighted (Link component switched to NavLink component)
export default App;

// handleDelete = (counterId) => {
//     const counters = this.state.counters.filter((a) => a.id !== counterId);
//     console.log("Object with id", counterId, "Deleted");
//     this.setState({ counters });
// };

// handleIncrement = (counter) => {
//     console.log("Increment Clicked");
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
// };

// handleDecrement = (counter) => {
//     console.log("Decrement Clicked");
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value--;
//     this.setState({ counters });
// };

// handleReset = () => {
//     const counters = this.state.counters.map((a) => (a.value = 0));
//     this.setState({ counters });
// };
