import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";

class Movies extends Component {
  state = {
    movies: getMovies(),
    
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => movie._id !== m._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie)
    movies[index] = {...movies[index]}
    movies[index].liked =  !movies[index].liked 
    this.setState({movies})    
    };
  

  render(){
    const { length: count } = this.state.movies;
    if (count === 0) {
      return "There are no movies in the database";
    }

    return (
      <React.Fragment>
        <p>showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <i 
                    onClick={() => this.handleLike(movie)}
                    className={this.classes(movie.liked)}
                    aria-hidden= "true"
                  ></i>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
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

  classes=(movie)=> {
    let classes = "fa fa-heart";
    classes += movie ? "" : "-o";
    return classes;
  }
}

export default Movies;
