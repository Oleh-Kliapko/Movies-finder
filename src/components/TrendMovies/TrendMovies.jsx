import PropTypes from 'prop-types';
import {
  HomeWrapper,
  HomeTitle,
  MovieList,
  MovieItem,
  MovieImg,
} from './TrendMovies.styled';
import { POSTER_URL } from 'utils/posterUrl';

export const TrendMovies = ({ trendMovies }) => {
  return (
    <HomeWrapper>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList>
        {trendMovies.map(({ id, title, backdrop_path }) => {
          return (
            <MovieItem key={id} to={`/movies/${id}`}>
              <MovieImg src={`${POSTER_URL}${backdrop_path}`} alt={title} />
              {title}
            </MovieItem>
          );
        })}
      </MovieList>
    </HomeWrapper>
  );
};

TrendMovies.propTypes = {
  trendMovies: PropTypes.array.isRequired,
};
