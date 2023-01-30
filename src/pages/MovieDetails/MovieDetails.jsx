import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'utils';
import { Loader } from 'utils';
import { MovieCard } from 'components/MovieCard';
import { AddInfoWrapper, InfoItem } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    setLoading(true);

    API.fetchMovieById(movieId)
      .then(movie => setMovieDetails(movie))
      .catch(() => toast.error('Sorry, there are not details of this movie'))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {movieDetails && <MovieCard movieDetails={movieDetails} />}
      <AddInfoWrapper>
        <InfoItem to={`/movies/${movieId}/cast`}>Cast</InfoItem>
        <InfoItem to={`/movies/${movieId}/reviews`}>Reviews</InfoItem>
      </AddInfoWrapper>
      <Outlet />
      <ToastContainer autoClose={3000} />
    </>
  );
};
