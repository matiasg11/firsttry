import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies(),
    };

    handleDelete = (movie) => {
        let movies = this.state.movies.filter((mov) => mov._id !== movie._id);
        this.setState({ movies });
        console.log(`Deleted Movie: ${movie.title} `);
    };

    showMovies = () => {
        let array = this.state.movies.map((mov) => (
            <li key={mov._id}>{mov.title}</li>
        ));
        console.log(array, "ok");
        return array;
    };

    render() {
        if (this.state.movies.length === 0)
            return <p>There are no movies here!</p>;

        return (
            <div>
                <p>
                    There {this.state.movies.length > 1 ? "are" : "is"}{" "}
                    {this.state.movies.length} movie
                    {this.state.movies.length > 1 ? "s" : ""} in the database.
                </p>
                <button
                    onClick={this.showMovies}
                    className="btn btn-primary btn-sm">
                    Show me what you got!
                </button>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((mov) => (
                            <tr key={mov._id}>
                                <td>{mov.title}</td>
                                <td>{mov.genre.name}</td>
                                <td>{mov.numberInStock}</td>
                                <td>{mov.dailyRentalRate}</td>
                                <td>
                                    <button
                                        onClick={() => this.handleDelete(mov)}
                                        className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Movies;
