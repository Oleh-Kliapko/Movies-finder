import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  HomeWrapper,
  HomeTitle,
  MovieList,
  MovieItem,
  MovieImg,
} from './TrendMovies.styled';

const POSTER_URL = 'https://image.tmdb.org/t/p/original';

export const TrendMovies = ({ trendMovies }) => {
  return (
    <HomeWrapper>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList>
        {trendMovies.map(({ id, title, backdrop_path }) => {
          return (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`}>
                <MovieImg src={`${POSTER_URL}${backdrop_path}`} alt={title} />
              </Link>
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
