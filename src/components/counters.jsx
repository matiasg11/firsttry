import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        //Object destructuring to eliminate all the ".props"
        const { onDecrement, onReset, onDelete, onIncrement, counters } =
            this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset All
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id} //Used internally by react
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
