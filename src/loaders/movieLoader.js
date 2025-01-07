const movieLoader = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=4769891&s=${searchTerm}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the data for further use
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null; // Return null if there's an error
  }
};

// Example usage

export default movieLoader;
