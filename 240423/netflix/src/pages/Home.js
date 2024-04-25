import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import HomeBanner from "../Components/HomeBanner";
import MovieSlide from "../Components/MovieSlide";

import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  if (loading) {
    return (
      <div className="loader">
        <ClipLoader
          loading={loading}
          color="#fff"
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div className="slide">
        {popularMovies.results && (
          <HomeBanner movie={popularMovies.results[11]} />
        )}
        <div className="movieContent">
          <h1>Popular Movie</h1>
          <MovieSlide movies={popularMovies} />
          <h1>TopRated Movie</h1>
          <MovieSlide movies={topRatedMovies} />
          <h1>Upcoming Movie</h1>
          <MovieSlide movies={upComingMovies} />
        </div>
      </div>
    );
  }
};

export default Home;
