import { useEffect, useState } from 'react';
import { MoviesService } from '../api/MoviesService';

export default function MovieDetail(props) {
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const { data } = await MoviesService.getMovieDetail(props.match.params.id);

    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className="movie-detail">
      <div className="container">
        <div className="row gap-x-5 ">
          <div className="col-6">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="imagem"
            />
          </div>
          <div className="col-6">
            <h1>{movie.title} </h1>
            <ul>
              <li>Budget: {movie.budget}</li>
              <li>Original language: {movie.original_language}</li>
              <li>Release Date: {movie.release_date}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-12">{movie.overview}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
