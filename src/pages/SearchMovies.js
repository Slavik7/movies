import React, { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList";
import SearchInput from "../components/SearchInput";
import { getSearchMovies } from "../actions/moviesActions";
import PersonList from "../components/PersonList";

const SearchMovies = () => {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("movies");
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    setPageNum(1);
  }, [searchText]);
  return (
    <div>
      <h2>Search Movies</h2>
      <SearchInput
        setSearchText={setSearchText}
        searchType={searchType}
        setSearchType={setSearchType}
      />
      {searchText.length > 0 && searchType === "movies" && (
        <MoviesList
          moviesType={getSearchMovies}
          arg={searchText}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      )}
      {searchText.length > 0 && searchType === "person" && (
        <PersonList
          searchText={searchText}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      )}
      ;
    </div>
  );
};

export default SearchMovies;
