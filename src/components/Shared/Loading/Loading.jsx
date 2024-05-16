import { useState, useEffect } from 'react';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75 z-50 ${loading ? '' : 'hidden'}`}>
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-100"></div>
    </div>
  );
};

export default Loading;
