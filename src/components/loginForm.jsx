import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {},
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    doSubmit = () => {
        //Call the server and then redirect the user to another place
        console.log("Submitted");
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password")}
                    {/* 
                    <Input
                        name="password"
                        value={data.password}
                        label="Password"
                        onChange={this.handleChange}
                        error={errors.password}
                    /> */}
                    {this.renderButton("Login")}
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
