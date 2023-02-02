import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'utils';
import { Loader } from 'utils';
import { SearchMovie } from 'components/SearchMovie';
import { MovieList } from 'components/MovieList';

export const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('movies')) || null
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    API.fetchMovieSearch(query)
      .then(res => {
        setMovies(res);
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .catch(() => toast.error('Sorry, there are not details of this movie'))
      .finally(() => setLoading(false));
  }, [query]);

  const onSubmitForm = search => {
    if (search !== query) {
      setQuery(search);
      updateQueryString(search);
      // setMovies([]);
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
      {loading && <Loader />}
      {movies && <MovieList movies={movies} />}
      <ToastContainer autoClose={3000} />
    </>
  );
};
