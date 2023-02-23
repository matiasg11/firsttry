import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import Register from "./components/register";
import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm}></Route>
                        <Route path="/movies/new" component={MovieForm}></Route>
                        <Route path="/movies/:id" component={MovieForm}></Route>
                        <Route path="/movies" component={Movies}></Route>
                        <Route path="/rentals" component={Rentals}></Route>
                        <Route path="/customers" component={Customers}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/not-found" component={NotFound}></Route>
                        <Redirect from="/" exact to="/movies" />
                        <Redirect to="/not-found" replace={true} />
                    </Switch>
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
