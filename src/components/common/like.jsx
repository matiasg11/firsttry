import React from "react";

//Input: liked => boolean
//Output: onClick (renders a full or empty heart)

const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) {
        classes += "-o";
    }

    return (
        <i
            onClick={props.onClick}
            style={{ cursor: "pointer" }}
            className={classes}
            aria-hidden="true"
        />
    );
};

export default Like;

// class Like extends Component {
//     state = {};
//     render() {
//         let classes = "fa fa-heart";
//         if (!this.props.liked) {
//             classes += "-0";
//         }
//         return (
//             <i
//                 onClick={this.props.toggleLike}
//                 style={{ cursor: "pointer" }}
//                 className={classes}
//                 aria-hidden="true"
//             />
//         );
//     }
// }

// export default Like;
