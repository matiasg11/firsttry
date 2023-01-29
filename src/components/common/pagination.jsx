import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    console.log(currentPage);

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount == 1) {
        return null;
    }
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            page === currentPage
                                ? "page-item active"
                                : "page-item"
                        }
                        key={page}>
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired,
};

export default Pagination;
