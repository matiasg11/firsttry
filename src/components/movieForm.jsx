import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MovieForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {},
    };

    schema = {
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.string()
            .required()
            .min(0)
            .max(99)
            .label("Number in Stock"),
        dailyRentalRate: Joi.string().required().min(0).max(10).label("Rate"),
    };

    doSubmit = () => {
        //Call the server and then redirect the user to another place
        console.log("Submitted");
    };

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderInput("genre", "Genre")}
                    {this.renderInput(
                        "numberInStock",
                        "Number in Stock",
                        "number"
                    )}
                    {this.renderInput("dailyRentalRate", "Rate", "number")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default MovieForm;

// const MovieForm = ({ match, history }) => {
//     return (
// <div>
//     <h1>Movie Form {match.params.id}</h1>
//     <Form />
//     <button
//         className="btn btn-primary"
//         onClick={() => history.push("/movies")}>
//         Save
//     </button>
// </div>
//     );
// };

// export default MovieForm;
