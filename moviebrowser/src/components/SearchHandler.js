import Hero from './Hero';
import React from 'react';
const SearchHandler = ({results}) => {
   

    function SearchResults({ results }) {
      if (results.length === 0) {
        return <p>No results found</p>;
      }
    
      return (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      );
    }
    
}
export default SearchHandler;