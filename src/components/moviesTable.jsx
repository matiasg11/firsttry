import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
    raiseSort = (path) => {
        console.log(path);
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };

    render() {
        const { movies, onDelete, onLike } = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => this.raiseSort("title")} scope="col">
                            Title
                        </th>
                        <th
                            onClick={() => this.raiseSort("genre.name")}
                            scope="col">
                            Genre
                        </th>
                        <th
                            onClick={() => this.raiseSort("numberInStock")}
                            scope="col">
                            Stock
                        </th>
                        <th
                            onClick={() => this.raiseSort("dailyRentalRate")}
                            scope="col">
                            Rate
                        </th>
                        <th onClick={() => this.raiseSort("")}></th>
                        <th onClick={() => this.raiseSort("")}></th>
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
                                    onClick={() => onLike(mov)}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => onDelete(mov)}
                                    className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;
