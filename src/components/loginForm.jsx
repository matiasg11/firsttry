import React, { Component } from "react";

class LoginForm extends Component {
    state = {
        account: { username: "", password: "" },
    };
    handleSubmit = (e) => {
        e.preventDefault(); //Prevents the default behavior which in this case is the submission of the form

        //Call the server and then redirect the user to another place
        const username = this.username.current.value;
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
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            autoFocus
                            ref={this.username}
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            name="username"
                            value={account.username}
                            id="username"
                            placeholder="youremail@emailprovider.com"></input>
                    </div>
                    <div className="form-group">
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
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
