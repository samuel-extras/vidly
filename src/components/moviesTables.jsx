import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <i
          onClick={() => this.props.onLike(movie)}
          className={this.props.classes(movie.liked)}
          aria-hidden="true"
        ></i>
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortedColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortedColumn={sortedColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
