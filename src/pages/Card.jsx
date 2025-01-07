import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ movies }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    padding: "1rem",
  };

  const cardStyle = {
    width: isMobile ? "90%" : "288px",
    maxWidth: "100%",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    maxHeight: isMobile ? "250px" : "400px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "16px",
  };

  const titleStyle = {
    fontSize: isMobile ? "1rem" : "1.125rem",
    fontWeight: "600",
    marginBottom: "8px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#1f2937",
    textDecoration: "none",
  };

  const infoStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.875rem",
    color: "#4b5563",
  };

  return (
    <div style={containerStyle}>
      {movies.Search && movies.Search.length > 0
        ? movies.Search.map((movie) => (
            <div
              key={movie.imdbID}
              style={cardStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img src={movie.Poster} alt={movie.Title} style={imageStyle} />
              <div style={contentStyle}>
                <Link to={`/moviedetails/${movie.imdbID}`} style={titleStyle}>
                  {movie.Title}
                </Link>
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
