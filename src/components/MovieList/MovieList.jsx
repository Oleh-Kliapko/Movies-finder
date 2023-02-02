import PropTypes from 'prop-types';
import { MovieListWrapper, MovieItem, MovieImg } from './MovieList.styled';
import { POSTER_URL } from 'utils/posterUrl';

export const MovieList = ({ movies }) => {
  return (
    <MovieListWrapper>
      {movies.map(({ id, title, backdrop_path }) => {
        return (
          <MovieItem key={id} to={`/movies/${id}`}>
            <MovieImg src={`${POSTER_URL}${backdrop_path}`} alt={title} />
            {title}
          </MovieItem>
        );
      })}
    </MovieListWrapper>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
