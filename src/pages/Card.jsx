import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Card = ({ movies }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  const cardStyle = {
    width: isMobile ? "100%" : "288px",
    maxWidth: "100%",
    border: "1px solid #e2e8f0",
    borderRadius: isMobile ? "0" : "8px",
    overflow: "hidden",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    margin: isMobile ? "0" : "1rem",
    transition: "all 0.3s ease",
  };

  const imageStyle = {
    width: "100%",
    height: isMobile ? "200px" : "400px",
    objectFit: "contain",
  };

  const contentStyle = {
    padding: isMobile ? "12px" : "16px",
  };

  const titleStyle = {
    fontSize: isMobile ? "1rem" : "1.125rem",
    fontWeight: "600",
    marginBottom: "8px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const infoStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: isMobile ? "0.75rem" : "0.875rem",
    color: "#4b5563",
  };

  return (
    <div style={{ display: "flex" }}>
      {movies.Search && movies.Search.length > 0
        ? movies.Search.map((movie) => (
            <div key={movie.imdbID} style={cardStyle}>
              <div>
                <img src={movie.Poster} alt={movie.Title} style={imageStyle} />
              </div>
              <div style={contentStyle}>
                <h3 style={titleStyle}>
                  <Link to={`/watchlist/${movie.imdbID}`}>{movie.Title}</Link>
                </h3>
                <div style={infoStyle}>
                  <span>{movie.Year}</span>
                  <span style={{ textTransform: "capitalize" }}>
                    {movie.Type}
                  </span>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
Card.propTypes = {
  movies: PropTypes.shape({
    Search: PropTypes.arrayOf(PropTypes.object),
  }),
};
export default Card;
