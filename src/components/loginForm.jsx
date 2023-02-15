import React, { Component } from "react";

class LoginForm extends Component {
    state = {};
    handleSubmit = (e) => {
        e.preventDefault(); //Prevents the default behavior which in this case is the submission of the form
        //Call the server and then redirect the user to another place
        console.log("Submitted");
    };
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="youremail@emailprovider.com"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            className="form-control"
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
