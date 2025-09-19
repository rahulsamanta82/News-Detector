
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10" aria-label="Loading analysis">
      <div className="relative h-16 w-16">
        <div className="absolute top-0 left-0 h-full w-full border-4 border-cyber-border rounded-full"></div>
        <div className="absolute top-0 left-0 h-full w-full border-t-4 border-cyber-cyan rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-cyber-text-secondary tracking-widest animate-pulse">ANALYZING...</p>
    </div>
  );
};

export default Loader;
