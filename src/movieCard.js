import React, { Component } from "react";
import axios from "axios";
import "./card.css";
import "bootstrap/dist/css/bootstrap.css";

class Moviecards extends Component {
  state = {
    movieData: {},
  };

  componentDidMount() {
    axios
      .get(
        `http://www.omdbapi.com/?t=${this.props.Title}&apikey=e3b125ec&plot=short`
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
        <div className="albulm">
          <div className="image-wrapper">
            <div>
              <img src={Poster} className="rounded img-fluid" alt={Title} />
            </div>
          </div>
          <div className="movie-info">
            <div>
              <h1>{Title}</h1>
              <h5>
                This {Type} is {Rated}
              </h5>
              <h5>Genre: {Genre} </h5>
              <h5>Runtime: {Runtime}</h5>
              <h5>Released: {Released} </h5>
            </div>
          </div>
        </div>
        <div className="plot">
          <h2>PLOT</h2>
          <hr />
          <p>{Plot}</p>
        </div>
      </div>
    );
  }
}

export default Moviecards;
