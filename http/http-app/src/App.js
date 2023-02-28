import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
    state = {
        posts: [],
    };

    async componentDidMount() {
        const { data: posts } = await axios.get(apiEndpoint);
        this.setState({ posts });
        //Pending => success ? Resolved : Rejected
    }

    handleAdd = async () => {
        const obj = { title: "a", body: "b" };
        const { data: post } = await axios.post(apiEndpoint, obj);
        console.log(post);

        let posts = [post, ...this.state.posts];
        this.setState({ posts });
    };

    handleUpdate = async (post) => {
        post.title = "UPDATED";
        await axios.put(apiEndpoint + "/" + post.id, post);
        //axios.patch(apiEndpoint + "/" + post.id, {title:post.title})
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = { ...post };
        this.setState({ posts });
        console.log(post);
    };

    handleDelete = async (post) => {
        //Save the original array of posts in case it fails
        const originalPosts = this.state.posts;

        //Create a posts array and delete the corresponding element
        const posts = [...this.state.posts];
        //Look for the index of the post to be deleted
        const index = posts.indexOf(post);
        //Remove the post from the array at that position
        posts.splice(index, 1);
        //Update the frontend and log the deleted post
        this.setState({ posts });
        console.log("Delete", post);

        try {
            //Optimistic approach. Serverside code happens after the frontside code
            //Assumes promises will likely be fulfilled
            await axios.delete(apiEndpoint + "/" + post.id, post);
        } catch (ex) {
            //If the promise fails, alert the error and restore the original posts array
            alert("Something failed while deleting the post!");
            this.setState({ posts: originalPosts });
        }
    };

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => this.handleUpdate(post)}>
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => this.handleDelete(post)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App;
