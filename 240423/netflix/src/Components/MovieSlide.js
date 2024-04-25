import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 6,
  },
};
const MovieSlide = ({ movies }) => {
  console.log(movies);
  return (
    <Carousel responsive={responsive}>
      {movies.results.map((item) => (
        <MovieCard item={item} />
      ))}
    </Carousel>
  );
};

export default MovieSlide;
