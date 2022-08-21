import React, { Fragment } from "react";
import MovieList from "./MovieApi/MovieList";
import Navigation from "./NavigationBar/Navigation";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <MovieList />
    </Fragment>
  );
};

export default App;
