import React, { Component } from "react";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService.js";
import Pagination from "./common/pagination.jsx";
import { paginate } from "../utils/paginate.js";
import { getGenres } from "../services/fakeGenreService.js";
import ListGroup from "./common/listGroup.jsx";
import MoviesTable from "./moviesTables.jsx";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortedColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => movie._id !== m._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenres: genre, currentPage: 1 });
  };
  handleSort = (sortedColumn) => {
    this.setState({ sortedColumn });
  };
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allmovies,
      selectedGenres,
      sortedColumn,
    } = this.state;
    const filtered =
      selectedGenres && selectedGenres._id
        ? allmovies.filter((movie) => movie.genre.name === selectedGenres.name)
        : allmovies;

    const sorted = _.orderBy(
      filtered,
      [sortedColumn.path],
      [sortedColumn.order]
    );
    const movies = paginate(sorted, currentPage, pageSize);
    return { data: movies, totalCount: filtered.length };
  };

  render() {
    const { length: count } = this.state.movies;

    const {
      pageSize,
      currentPage,
      genres,
      selectedGenres,
      sortedColumn,
    } = this.state;

    if (count === 0) {
      return "There are no movies in the database";
    }
    const { totalCount, data: movies } = this.getPageData();

    return (
      <React.Fragment>
        <div className="row mt-4">
          <div className="col-2">
            <ListGroup
              items={genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenres}
            />
          </div>
          <div className="col">
            <p>showing {totalCount} movies in the database</p>
            <MoviesTable
              movies={movies}
              sortedColumn={sortedColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              classes={this.classes}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  classes = (movie) => {
    let classes = "fa fa-heart";
    classes += movie ? "" : "-o";
    return classes;
  };
}

export default Movies;
