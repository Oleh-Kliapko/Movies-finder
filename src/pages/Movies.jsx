import { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'utils';
import { Loader } from 'utils';
import { SearchMovie } from 'components/SearchMovie';

const MovieList = lazy(() => import('../components/MovieList'));

let initialMovieName;

const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? initialMovieName;

  useEffect(() => {
    if (!movieName) return;

    API.fetchMovieSearch(movieName)
      .then(res => {
        setMovies(res);
        initialMovieName = movieName;
      })
      .catch(() => toast.error('Sorry, there are not details of this movie'));
  }, [movieName]);

  const onSubmitForm = search => {
    if (search !== query) {
      setQuery(search);
      updateQueryString(search);
    } else {
      toast.warn('The new search must be different from the current search');
    }
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchMovie value={movieName} onSubmit={onSubmitForm} />
      <Suspense fallback={<Loader />}>
        {movies && (
          <MovieList movies={movies} initialMovieName={initialMovieName} />
        )}
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Movies;
