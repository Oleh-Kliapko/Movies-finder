import { useState, useEffect, lazy, Suspense } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'utils';
import { Loader } from 'utils';
import { HomeTitle } from './Home.styled';

const MovieList = lazy(() => import('../../components/MovieList'));

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    API.fetchMovieTrends()
      .then(res => setTrendMovies(res))
      .catch(() => toast.error('Sorry, today there are not trending movies'));
  }, []);

  return (
    <>
      {trendMovies && <HomeTitle>Trending today</HomeTitle>}
      <Suspense fallback={<Loader />}>
        {trendMovies && <MovieList movies={trendMovies} />}
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};