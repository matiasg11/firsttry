import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
    columns = [
        { path: "title", label: "Title" },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        { key: "like" },
        { key: "delete" },
    ];
    render() {
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
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

{
    /* <thead>
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
                </thead> */
}
