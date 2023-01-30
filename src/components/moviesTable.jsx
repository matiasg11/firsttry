import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
    const { movies, onDelete, onLike } = props;

    return (
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
};

export default MoviesTable;
