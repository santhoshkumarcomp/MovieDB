import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  if (!movies?.Search?.length) {
    return (
      <div className="no-movies">
        <p>!!!</p>
      </div>
    );
  }

  // Calculate total pages
  const totalPages = Math.ceil(movies.Search.length / itemsPerPage);

  // Get movies for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = movies.Search.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container">
      {/* Movie Cards */}

      <div className="movie-grid">
        {currentMovies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <Link to={`/moviedetails/${movie.imdbID}`}>
              <div className="movie-image">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "/api/placeholder/288/400"
                  }
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

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>

      <style>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .movie-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .movie-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .movie-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .movie-image {
          position: relative;
          padding-top: 150%; /* 2:3 aspect ratio */
        }

        .movie-image img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .movie-info {
          padding: 15px;
        }

        .movie-info h3 {
          margin: 0 0 10px 0;
          font-size: 1.1rem;
        }

        .movie-info a {
          color: #333;
          text-decoration: none;
        }

        .movie-info a:hover {
          color: #0066cc;
          text-decoration: underline;
        }

        .movie-info p {
          margin: 0;
          color: #666;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-top: 20px;
        }

        .pagination-button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          background-color: #0066cc;
          color: white;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .pagination-button:hover:not(:disabled) {
          background-color: #0052a3;
        }

        .pagination-button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }

        .page-info {
          color: #333;
        }

        .no-movies {
          text-align: center;
          padding: 20px;
          color: #666;
        }

        @media (max-width: 768px) {
          .movie-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .movie-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

Card.propTypes = {
  movies: PropTypes.shape({
    Search: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Card;
