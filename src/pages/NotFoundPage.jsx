import notPage from '../utils/notPage.jpg';

export const NotFoundPage = () => {
  return (
    <>
      <div style={{ padding: '40px', fontSize: '24px' }}>
        This page doesn't exist. Go to <a href="/">Home</a>
      </div>
      <img
        style={{ width: '400px', height: 'auto' }}
        src={notPage}
        alt="Not Page"
      />
    </>
  );
};
