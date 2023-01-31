import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'utils';
import { API } from 'utils';
import { ReviewList } from 'components/ReviewList';

export const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState();

  useEffect(() => {
    setLoading(true);

    API.fetchReviewsById(movieId)
      .then(data => setReviews(data))
      .catch(() => toast.error('Sorry, there are not reviews of this movie'))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews && <ReviewList reviews={reviews} />}
      <ToastContainer autoClose={3000} />
    </>
  );
};
