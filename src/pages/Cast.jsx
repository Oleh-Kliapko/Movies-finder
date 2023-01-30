import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'utils';
import { API } from 'utils';
import { CastList } from 'components/CastList';

export const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState();

  useEffect(() => {
    setLoading(true);

    API.fetchCreditsById(movieId)
      .then(data => setCredits(data))
      .catch(() => toast.error('Sorry, there is not cast of this movie'))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {credits && <CastList credits={credits} />}
      <ToastContainer autoClose={3000} />
    </>
  );
};
