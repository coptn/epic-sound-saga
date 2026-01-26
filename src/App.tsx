import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    window.location.href = '/game.html';
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white text-xl">Loading game...</p>
    </div>
  );
};

export default App;
