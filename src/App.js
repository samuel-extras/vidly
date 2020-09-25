import React, { Component } from "react";
import Movies from "./components/movies.jsx";
import { Redirect, Route, Switch } from "react-router-dom";
import MoviesForm from "./components/movie.jsx";
import NotFound from "./components/not-found.jsx";
import Rentals from "./components/rentals.jsx";
import Customer from "./components/customer.jsx";
import NavBar from "./components/navBar.jsx";
import "./App.css";
import LoginForm from "./components/loginform.jsx";

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <main className="container">
        <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/movies/:id" component={MoviesForm} />
        <Route path="/customers" component={Customer} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/movies" component={Movies} />
        <Redirect from="/" exact to="/movies"/>
          <Redirect to="/not-found" />
        </Switch>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
