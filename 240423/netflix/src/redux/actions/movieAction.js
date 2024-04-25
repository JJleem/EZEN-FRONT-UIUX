import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
      });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const topRatedMovieApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const upComingMovieApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const genereApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko`
        
      );

      const [popularMovies, topRatedMovies, upComingMovies, genereList] =
        await Promise.all([
          popularMovieApi,
          topRatedMovieApi,
          upComingMovieApi,
          genereApi,
        ]);
      console.log(genereApi);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genereList: genereList.data,
          loading: true,
        },
      });
      console.log(genereList);
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
};
export const movieAction = { getMovies };
