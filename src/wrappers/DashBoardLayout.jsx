import { Outlet, useNavigate } from "react-router";
import backgroundImage from "../assets/Background.jpeg";
import movieLoader from "../loaders/movieLoader";
import { useState } from "react";
import Card from "../pages/Card";
var movies = {};
const DashBoardLayout = ({ watchList, setWatchList }) => {
  const [searchMovie, setSearchMovie] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const navigate = useNavigate();
  const handleClick = (searchMovie) => async () => {
    movies = await movieLoader(searchMovie);
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
          {/* <select name="selectedFruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </select> */}
          <button onClick={handleClick(searchMovie)}>Search</button>
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
        }`}</style>
    </>
  );
};

export default DashBoardLayout;
