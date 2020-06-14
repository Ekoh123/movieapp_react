import React, { Component } from "react";
import axios from "axios";

class Moviecards extends Component {
  state = {
    movieData: {},
  };

  componentDidMount() {
    axios
      .get("http://www.omdbapi.com/?i=tt3896198&apikey=e3b125ec&plot=full")
      .then((response) => console.log(response.data));
    //.then((response) => {
    // this.setState({
    //  movieData: response,
    // });
    // });
  }

  render() {
    return <div className="card-wrapper"></div>;
  }
}

export default Moviecards;
