import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovie, removeMovie } from '../store/actions/movies';

export const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites)
  return (
    <div className="movie-item p-30 backdrop-grayscale">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt="imagem"
        />
      </div>
      <div className="movie-excerpt">
        <h3 className="font-semibold">{movie.title} </h3>
        <Link
          to={`/movie/${movie.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Ver Detalhes
        </Link>
        {
          favorites.movies.find(m => m.id === movie.id) 
          ? <button onClick={() => dispatch(removeMovie(movie))} 
        className="bg-red-700 hover:bg-red-300 text-white font-bold py-1 px-2 rounded"
        >Remover</button>
        : <button onClick={() => dispatch(addMovie(movie))} 
        className="bg-red-300 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >Favoritos</button>
        }
        
      </div>
    </div>
  );
}
