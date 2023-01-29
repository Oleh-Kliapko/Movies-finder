import { Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MovieDetails } from './MovieCard';

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
