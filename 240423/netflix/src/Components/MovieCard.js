import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ item }) => {
  const { genereList } = useSelector((state) => state.movie);

  const navigate = useNavigate();
  const direct = () => {
    navigate(`/movies/${item.id}`);
  };
  return (
    <div
      onClick={direct}
      className="cards"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id, idx) => (
            <Badge key={idx} bg="danger">
              {genereList.genres.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>

        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청불" : "전체"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
