import React, { useState } from "react";

import styles from "../styles/SearchInput.module.css";
const SearchInput = ({ setSearchText, setSearchType, searchType }) => {
  const [text, setText] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchText(text);
    setText("");
  };
  const textInputUpdate = () => {};
  return (
    <form className={styles["search-container"]}>
      <select
        className={styles["type-select"]}
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option className={styles["type-option"]} value="movies">
          Movies
        </option>
        <option value="person">Actors</option>
      </select>
      <input
        className={styles["search-input"]}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button
        className={styles["btn-search"]}
        type="submit"
        onClick={searchHandler}
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
