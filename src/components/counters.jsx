import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
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
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset All
                </button>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id} //Used internally by react
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
