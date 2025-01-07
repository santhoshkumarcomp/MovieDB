import PropTypes from "prop-types";
import "./MovieDetails.css";
import { useEffect } from "react";
import { useParams } from "react-router";

const MovieDetails = ({ movie, setMovie }) => {
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=4769891&i=${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovie(data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching movies:", error);
        // Set the error message in state
      }
    };

    if (id) {
      fetchMovies();
    }
  }, [id, setMovie]); // Re-run the effect when `id` changes

  return (
    <div className="movie-details-container">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="movie-info">
        <h1 className="movie-title">{movie.Title}</h1>
        <p className="movie-plot">{movie.Plot}</p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Writer:</strong> {movie.Writer}
        </p>
        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p>
          <strong>Language:</strong> {movie.Language}
        </p>
        <p>
          <strong>Country:</strong> {movie.Country}
        </p>
        <p>
          <strong>Awards:</strong> {movie.Awards}
        </p>
        <p>
          <strong>Release Date:</strong> {movie.Released}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.Runtime}
        </p>
        <div className="movie-ratings">
          <h3>Ratings:</h3>
          {/* {movie.Ratings.map((rating, index) => (
            <p key={index}>
              <strong>{rating.Source}:</strong> {rating.Value}
            </p>
          ))} */}
        </div>
        <p>
          <strong>IMDb Rating:</strong> {movie.imdbRating}
        </p>
        <p>
          <strong>Box Office:</strong> {movie.BoxOffice}
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Writer: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Language: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
    Awards: PropTypes.string.isRequired,
    Released: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Ratings: PropTypes.arrayOf(
      PropTypes.shape({
        Source: PropTypes.string.isRequired,
        Value: PropTypes.string.isRequired,
      })
    ),
    imdbRating: PropTypes.string.isRequired,
    BoxOffice: PropTypes.string,
  }),
  setMovie: PropTypes.func.isRequired,
};

export default MovieDetails;
