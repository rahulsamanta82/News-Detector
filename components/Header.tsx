import React from 'react';

// New component for the animated background
const HeaderBackground: React.FC = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(57, 211, 211, 0.1)" strokeWidth="0.5"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Animated Nodes and Lines */}
            <g>
                <circle cx="10%" cy="50%" r="3" fill="rgba(57, 211, 211, 0.5)" className="animate-node-pulse" />
                <circle cx="25%" cy="30%" r="2" fill="rgba(57, 211, 211, 0.5)" className="animate-node-pulse" style={{ animationDelay: '1s' }} />
                <circle cx="40%" cy="70%" r="3" fill="rgba(57, 211, 211, 0.5)" className="animate-node-pulse" style={{ animationDelay: '2s' }} />
                <circle cx="60%" cy="40%" r="2" fill="rgba(57, 211, 211, 0.5)" className="animate-node-pulse" style={{ animationDelay: '0.5s' }} />
                <circle cx="75%" cy="60%" r="3" fill="rgba(57, 211, 211, 0.5)" className="animate-node-pulse" style={{ animationDelay: '1.5s' }} />
                <circle cx="90%" cy="20%" r="2" fill="rgba(57, 211, 211, 0.5)" className="animate-node-pulse" />
                
                <line x1="10%" y1="50%" x2="25%" y2="30%" stroke="rgba(57, 211, 211, 0.2)" strokeWidth="1" className="animate-line-fade" />
                <line x1="25%" y1="30%" x2="60%" y2="40%" stroke="rgba(57, 211, 211, 0.2)" strokeWidth="1" className="animate-line-fade" style={{ animationDelay: '1s' }} />
                <line x1="40%" y1="70%" x2="25%" y2="30%" stroke="rgba(57, 211, 211, 0.2)" strokeWidth="1" className="animate-line-fade" style={{ animationDelay: '2s' }} />
                <line x1="40%" y1="70%" x2="75%" y2="60%" stroke="rgba(57, 211, 211, 0.2)" strokeWidth="1" className="animate-line-fade" />
                <line x1="60%" y1="40%" x2="75%" y2="60%" stroke="rgba(57, 211, 211, 0.2)" strokeWidth="1" className="animate-line-fade" style={{ animationDelay: '0.5s' }} />
                <line x1="90%" y1="20%" x2="60%" y2="40%" stroke="rgba(57, 211, 211, 0.2)" strokeWidth="1" className="animate-line-fade" style={{ animationDelay: '1.5s' }} />
            </g>
        </svg>
    </div>
);


interface HeaderProps {
  page: 'home' | 'analyzer';
  setPage: (page: 'home' | 'analyzer') => void;
}

const Header: React.FC<HeaderProps> = ({ page, setPage }) => {
  return (
    <header className="relative flex items-center justify-between py-4">
      <HeaderBackground />
      <div 
        className="relative z-10 flex items-center gap-2 cursor-pointer"
        onClick={() => setPage('home')}
        aria-label="Go to home page"
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-cyber-cyan tracking-wider" style={{ textShadow: '0 0 8px rgba(57, 211, 211, 0.7)' }}>
          SYNTHETICA
        </h1>
      </div>
      <nav className="relative z-10">
        {page === 'home' ? (
          <button
            onClick={() => setPage('analyzer')}
            className="px-6 py-2 font-bold text-cyber-cyan border-2 border-cyber-cyan rounded-md bg-cyber-bg/50 backdrop-blur-sm hover:bg-cyber-cyan hover:text-cyber-bg transition-all duration-300 hover:shadow-cyber-glow-cyan"
          >
            Get Started
          </button>
        ) : (
          <button
            onClick={() => setPage('home')}
            className="text-cyber-text-secondary hover:text-cyber-cyan transition-colors"
          >
            &larr; Back to Home
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;