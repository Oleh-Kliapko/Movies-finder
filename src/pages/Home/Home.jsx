import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'utils';
import { Loader } from 'utils';
import { MovieList } from '../../components/MovieList';
import { HomeTitle } from './Home.styled';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.fetchMovieTrends()
      .then(res => setTrendMovies(res))
      .catch(() => toast.error('Sorry, today there are not trending movies'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loader />}
      {trendMovies && <HomeTitle>Trending today</HomeTitle>}
      {trendMovies && <MovieList movies={trendMovies} />}
      <ToastContainer autoClose={3000} />
    </>
  );
};
