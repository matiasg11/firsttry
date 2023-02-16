import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
    state = {
        account: { username: "", password: "" },
        errors: {},
    };

    validate = () => {
        return { username: "Username is required. " };
    };

    handleSubmit = (e) => {
        e.preventDefault(); //Prevents the default behavior which in this case is the submission of the form

        const errors = this.validate();
        this.setState({ errors });
        if (errors) return;
        //Call the server and then redirect the user to another place
        console.log("Submitted");
    };

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    };

    render() {
        const { account } = this.state;

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={account.username}
                        label="Username"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="password"
                        value={account.password}
                        label="Password"
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Login</button>
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
                            value={account.password}
                            id="password"
                            placeholder="123456"></input>
                    </div> */
}
