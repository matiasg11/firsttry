import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                className="form-control"
                onChange={onChange}
                name={name}
                value={value}
                id={name}></input>
            {error && <div className="alert alert-danger">{error}</div>}
            {/* //If error is truthy, it shows the div. */}
        </div>
    );
};

export default Input;
