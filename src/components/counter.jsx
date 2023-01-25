import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ["tag1", "tag2", "tag3"],
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        console.log("Increment Clicked");
        this.setState({ count: this.state.value + 1 });
    };

    render() {
        console.log("Props:", this.props);

        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge p-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}
export default Counter;
