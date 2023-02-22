import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
    state = {
        data: { username: "", password: "" },
        errors: {},
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);

        if (!error) return null;

        const errors = {};

        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;

        // console.log(result);
        // const errors = {};

        // const { data } = this.state;

        // if (data.username.trim() === "") {
        //     errors.username = "Username is required";
        // }

        // if (data.password.trim() === "") {
        //     errors.password = "Password is required";
        // }
        // return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (e) => {
        e.preventDefault(); //Prevents the default behavior which in this case is the submission of the form

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors) return;
        //Call the server and then redirect the user to another place
        console.log("Submitted");
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);

        return error ? error.details[0].message : null;

        // if (name === "username") {
        //     if (value.trim() === "") return "Username is required.";
        // }
        // if (name === "password") {
        //     if (value.trim() === "") return "Password is required.";
        // }
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    render() {
        const { data, errors } = this.state;

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={data.username}
                        label="Username"
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        value={data.password}
                        label="Password"
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button
                        disabled={this.validate()}
                        className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;

{
    /* <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            ref={this.password}
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            name="password"
                            value={data.password}
                            id="password"
                            placeholder="123456"></input>
                    </div> */
}
