import { Outlet, useNavigate } from "react-router";
import backgroundImage from "../assets/Background.jpeg";
import movieLoader from "../loaders/movieLoader";
import { useState } from "react";
import Card from "../pages/Card";
import PropTypes from "prop-types";
var movies = {};
const DashBoardLayout = ({ watchList, setWatchList }) => {
  const [searchMovie, setSearchMovie] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [type, setType] = useState("movie");
  const navigate = useNavigate();
  const handleClick = (searchMovie, type) => async () => {
    movies = await movieLoader(searchMovie, type);
    setMoviesData(movies.Search || []);
    console.log("Fetched Movies:", moviesData);

    console.log(moviesData);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "'Lato', sans-serif",
            textAlign: "center",
            fontSize: "75px",
            marginTop: "20px", // Add some spacing above the heading
          }}
        >
          MOVIE DATABASE
        </h1>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <input
            type="text"
            placeholder="Search for a movie..."
            name="searchMovie"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            style={{
              width: "50%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
          <button onClick={handleClick(searchMovie, type)}>Search</button>
          <button
            onClick={() => {
              navigate("/watchlist");
              console.log("Cleared Watchlist");
            }}
          >
            WatchList
          </button>
          <Outlet />
          <Card
            movies={movies}
            watchList={watchList}
            setWatchList={setWatchList}
          />
        </div>
      </div>
      <style>{`button {
         margin-left: 20px;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          background-color: #0066cc;
          color: white;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        select {
         margin-left: 20px;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          background-color: #0066cc;
          color: white;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        `}</style>
    </>
  );
};
DashBoardLayout.propTypes = {
  watchList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setWatchList: PropTypes.func.isRequired,
};
export default DashBoardLayout;
