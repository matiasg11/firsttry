import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utilities/paginate";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
    state = {
        movies: [],
        currentPage: 1,
        pageSize: 3,
        genres: [],
    };

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }

    handleDelete = (movie) => {
        let movies = this.state.movies.filter((mov) => mov._id !== movie._id);
        this.setState({ movies });
        console.log(`Deleted Movie: ${movie.title} `);
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const idx = movies.indexOf(movie);
        movies[idx] = { ...movies[idx] };
        movies[idx].liked = !movies[idx].liked;
        console.log(movies[idx].title, "(un)liked");
        this.setState({ movies });

        //     if (movie.liked) {
        //         movie.liked = false;
        //     } else {
        //         movie.liked = true;
        //     }
        //     let movies = this.state.movies.filter((mov) => mov._id !== movie._id);
        //     this.setState({ movies });
        //     console.log(`Liked Movie: ${movie.title} `);
        // let movies = this.state.movies;
        // for (let mov in movies) {
        //     mov.liked = false;
        // }
        // this.setState({ movies });
    };

    showMovies = () => {
        let array = this.state.movies.map((mov) => (
            <li key={mov._id}>{mov.title}</li>
        ));
        console.log(array, "ok");
        return array;
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = (genre) => {};

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if (this.state.movies.length === 0)
            return <p>There are no movies here!</p>;

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}></ListGroup>
                </div>

                <div className="col">
                    <p>
                        There {this.state.movies.length > 1 ? "are " : "is "}
                        {this.state.movies.length} movie
                        {this.state.movies.length > 1 ? "s" : ""} in the
                        database.
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
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((mov) => (
                                <tr key={mov._id}>
                                    <td>{mov.title}</td>
                                    <td>{mov.genre.name}</td>
                                    <td>{mov.numberInStock}</td>
                                    <td>{mov.dailyRentalRate}</td>
                                    <td>
                                        <Like
                                            liked={mov.liked}
                                            onClick={() => this.handleLike(mov)}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                this.handleDelete(mov)
                                            }
                                            className="btn btn-danger btn-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

// Pagination.propTypes = {
//     itemsCount: propTypes.number.isRequired,
//     pageSize: propTypes.number.isRequired,
//     currentPage: propTypes.number.isRequired,
//     onPageChange: propTypes.func.isRequired,
// };
export default Movies;
