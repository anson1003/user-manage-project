import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
