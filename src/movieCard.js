import React, { Component } from "react";
import axios from "axios";
import "./card.css";

class Moviecards extends Component {
  state = {
    movieData: {},
  };

  componentDidMount() {
    axios
      .get(
        `http://www.omdbapi.com/?t=${this.props.Title}&apikey=e3b125ec&plot=full`
      )

      .then((response) => {
        //console.log(response.data);
        this.setState({
          movieData: response.data,
        });
      });
  }

  render() {
    const {
      Poster,
      Title,
      Released,
      Type,
      Genre,
      Plot,
      Rated,
      Runtime,
    } = this.state.movieData;

    return (
      <div className="card-wrapper">
        <div className="image-wrapper">
          <div>
            <img src={Poster} alt={Title} />
          </div>
        </div>
        <div className="movie-info">
          <div>
            <h1>{Title}</h1>
            <p>
              This {Type} is {Rated}
            </p>
            <h4>Genre: {Genre} </h4>
            <p>Runtime: {Runtime}</p>
            <p>Released: {Released} </p>
          </div>
        </div>
        <div className="plot">
          <h2>PLOT</h2>
          <p>{Plot}</p>
        </div>
      </div>
    );
  }
}

export default Moviecards;
