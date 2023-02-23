import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utilities/paginate";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
    state = {
        movies: [],
        currentPage: 1,
        pageSize: 4,
        genres: [],
        sortColumn: { path: "title", order: "asc" },
    };

    componentDidMount() {
        const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
        this.setState({ movies: getMovies(), genres: genres });
    }

    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    };

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

    handleGenreSelect = (genre) => {
        console.log(genre);
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };

    render() {
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            selectedGenre,
            sortColumn,
        } = this.state;

        if (this.state.movies.length === 0)
            return <p>There are no movies here!</p>;

        //First: Filter
        const filtered =
            selectedGenre && selectedGenre._id
                ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
                : allMovies;
        //Second: sort
        const sorted = _.orderBy(
            filtered,
            [sortColumn.path],
            [sortColumn.order]
        );

        const movies = paginate(sorted, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        textProperty="name" //Default props
                        valueProperty="_id" //Default props
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}></ListGroup>
                </div>

                <div className="col">
                    <p>
                        There {filtered.length > 1 ? "are " : "is "}
                        {filtered.length} movie
                        {filtered.length > 1 ? "s" : ""} in the database.
                    </p>
                    <Link
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{ marginBottom: 20 }}>
                        Add a movie
                    </Link>

                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}></MoviesTable>
                    <Pagination
                        itemsCount={filtered.length}
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
