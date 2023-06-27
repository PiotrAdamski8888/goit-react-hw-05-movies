import React, { useState } from 'react';
import { searchMovies } from 'services/Api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();

    try {
      const response = await searchMovies(searchQuery);
      setSearchResults(response.results);
    } catch (error) {
      console.log('Error searching movies:', error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Enter a movie title"
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
