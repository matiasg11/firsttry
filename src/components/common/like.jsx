import React, { Component } from "react";

//Input: liked => boolean
//Output: onClick (renders a full or empty heart)

class Like extends Component {
    state = {};
    render() {
        let classes = "fa fa-heart";
        if (!this.props.liked) {
            classes += "-0";
        }
        return (
            <i
                onClick={this.props.toggleLike}
                style={{ cursor: "pointer" }}
                className={classes}
                aria-hidden="true"
            />
        );
    }
}

export default Like;
