import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { POSTER_URL } from 'utils/posterUrl';
import {
  ButtonGoBack,
  CardWrapper,
  MovieInfo,
  Title,
  Subtitle,
  Poster,
  Text,
  AddInfo,
} from './MovieCard.styled';

export const MovieCard = ({
  movieDetails: {
    poster_path,
    genres,
    overview,
    release_date,
    title,
    vote_average,
  },
}) => {
  const genresNames = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <ButtonGoBack to="/">⬅ Go back</ButtonGoBack>
      <CardWrapper>
        <Poster src={`${POSTER_URL}${poster_path}`} alt={title} />
        <MovieInfo>
          <Title> {title} </Title>
          <Subtitle>
            Released by:
            <Text>{format(new Date(release_date), 'yyyy MMM dd')}</Text>
          </Subtitle>
          <Subtitle>User Score: {Math.round(vote_average * 10)}%</Subtitle>
          <Subtitle>
            OverView:
            <Text>{overview}</Text>
          </Subtitle>
          <Subtitle>
            Genres:
            <Text>{genresNames}</Text>
          </Subtitle>
        </MovieInfo>
      </CardWrapper>
      <AddInfo>Additional information</AddInfo>
    </>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};
