import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import Moviecards from "./movieCard";
import axios from "axios";

class App extends Component {
  state = {
    movieList: ["tt3896198"],
    movieInput: "",
  };

  movieSearch = (event) => {
    event.preventDefault();

    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.movieInput}&apikey=e3b125ec&plot=full`
      )
      .then((response) => response.data);
  };

  handleChange = (event) => {
    this.setState({
      movieInput: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.movieSearch}>
          <input
            className="movie-input"
            placeholder="Enter movie name"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {this.state.movieList.length > 0 ? (
          this.state.movieList.map((movie) => (
            <Moviecards Title={movie.Title} Key={movie.imdbID} />
          ))
        ) : (
          <p>Sorry, the movie was not found.</p>
        )}
      </div>
    );
  }
}

export default App;

// this.state.movieSearch.length>0?
//this.state.movieList.map(movie => (<Moviecards Title={movie.Title} Key={movie.imdbID}/>)
