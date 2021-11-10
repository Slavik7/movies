import React from "react";

import { Route, Switch } from "react-router-dom";
//Components and Pages
import Header from "./components/Header";
import PopularMovies from "./pages/PopularMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import SearchMovies from "./pages/SearchMovies";
import FilterMovies from "./pages/FilterMovies";
import Home from "./pages/Home";
import Person from "./pages/Person";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/popular-movies">
          <PopularMovies />
        </Route>
        <Route path="/upcoming-movies">
          <UpcomingMovies />
        </Route>
        <Route path="/search">
          <SearchMovies />
        </Route>
        <Route path="/filter">
          <FilterMovies />
        </Route>
        <Route>
          <Person path="/person/:id" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
