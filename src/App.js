import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Moviecards from "./movieCard";
import axios from "axios";

class App extends Component {
  state = {
    movieList: [],
    movieInput: "",
  };

  handleChange = (event) => {
    this.setState({
      movieInput: event.target.value,
    });
  };

  movieSearch = (event) => {
    event.preventDefault();

    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.movieInput}&apikey=e3b125ec&plot=short`
      )
      .then((response) => {
        console.log(response.data.Search);
        this.setState({
          movieList: response.data.Search,
        });
      })
      .then({ movieInput: "" });
  };

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1 className="display-1">MOOVIT!</h1>
          <form className="form-group" onSubmit={this.movieSearch}>
            <input
              className="movie-input forn-control form-control-lg"
              placeholder="Enter movie name"
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-lg btn-info">
              Search
            </button>
          </form>
        </div>

        {this.state.movieList.length > 0 ? (
          this.state.movieList.map((movie) => (
            <Moviecards Title={movie.Title} Key={movie.imdbID} />
          ))
        ) : (
          <p className="text-center">
            Please enter a movie name into the search box
          </p>
        )}
      </div>
    );
  }
}

export default App;

// this.state.movieSearch.length>0?
//this.state.movieList.map(movie => (<Moviecards Title={movie.Title} Key={movie.imdbID}/>)
