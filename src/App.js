import React, { Component } from "react";
import Counters from "./components/counters";
import Movies from "./components/movies";
import NavBar from "./components/navbar";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 11 },
            { id: 2, value: 12 },
            { id: 3, value: 13 },
            { id: 4, value: 14 },
        ],
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((a) => a.id !== counterId);
        console.log("Object with id", counterId, "Deleted");
        this.setState({ counters });
    };

    handleIncrement = (counter) => {
        console.log("Increment Clicked");
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = (counter) => {
        console.log("Decrement Clicked");
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((a) => (a.value = 0));
        this.setState({ counters });
    };

    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onDecrement={this.handleDecrement}
                    />
                    <Movies />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
