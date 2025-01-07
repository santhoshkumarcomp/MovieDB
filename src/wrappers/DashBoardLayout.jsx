import { Outlet } from "react-router";
import backgroundImage from "../assets/Background.jpeg";
import movieLoader from "../loaders/movieLoader";
import { useState } from "react";
import Card from "../pages/Card";
var movies = {};
const DashBoardLayout = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [moviesData, setMoviesData] = useState([]);

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
          <button onClick={handleClick(searchMovie)}>Search</button>
          <Outlet />
          <Card movies={movies} />
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
