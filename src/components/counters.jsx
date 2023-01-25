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

    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id} //Used internally by react
                        onDelete={this.handleDelete}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
