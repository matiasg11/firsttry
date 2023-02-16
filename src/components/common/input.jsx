import React from "react";

const Input = ({ name, label, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                // ref={this.username}
                type="text"
                className="form-control"
                onChange={onChange}
                name={name}
                value={value}
                id={name}
                // placeholder="youremail@emailprovider.com"
            ></input>
        </div>
    );
};

export default Input;
