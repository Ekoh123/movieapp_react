import React, { Component } from "react";
import "./App.css";
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
        `http://www.omdbapi.com/?s=${this.state.movieInput}&apikey=e3b125ec&plot=full`
      )
      .then((response) => {
        console.log(response.data.Search);
        this.setState({
          movieList: response.data.Search,
        });
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
          <p>Please enter a movie name into the search box</p>
        )}
      </div>
    );
  }
}

export default App;

// this.state.movieSearch.length>0?
//this.state.movieList.map(movie => (<Moviecards Title={movie.Title} Key={movie.imdbID}/>)
