import React from 'react';
import { useParams } from 'react-router-dom';

function Search() {
  const { category } = useParams(); 

  return (
    <div>
      <h1>Search Results for: {category}</h1>
    </div>
  );
}

export default Search;
