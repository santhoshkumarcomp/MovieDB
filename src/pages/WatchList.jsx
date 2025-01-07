import { Link } from "react-router";
import PropTypes from "prop-types";
const WatchList = ({ watchList }) => {
  return (
    <>
      <h1
        style={{
          color: "white",
          fontFamily: "'Lato', sans-serif",
          textAlign: "center",
          fontSize: "20px",
          marginTop: "20px", // Add some spacing above the heading
        }}
      >
        Movies in WatchList
      </h1>
      <div className="movie-grid">
        {watchList.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <Link to={`/moviedetails/${movie.imdbID}`}>
              <div className="movie-image">
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "N/A"}
                  alt={movie.Title}
                />
              </div>
              <div className="movie-info">
                <h3>
                  <a href={`/moviedetails/${movie.imdbID}`}>{movie.Title}</a>
                </h3>
                <p>{movie.Year}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
WatchList.propTypes = {
  watchList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setWatchList: PropTypes.func.isRequired,
};
export default WatchList;
