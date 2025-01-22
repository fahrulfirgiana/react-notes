import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className='not-found-page'>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to='/'>Back to Home</Link>
    </section>
  );
}

export default NotFoundPage;
