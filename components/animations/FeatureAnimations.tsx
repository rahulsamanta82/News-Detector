import React from 'react';

export const TextAnalysisAnimation: React.FC = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path d="M40 10 H160 V140 H40 Z" fill="transparent" stroke="#30363d" strokeWidth="2" className="group-hover:stroke-cyber-cyan transition-colors duration-300"/>
    <rect x="50" y="30" width="100" height="8" rx="2" fill="#30363d" />
    <rect x="50" y="50" width="80" height="8" rx="2" className="animate-text-highlight-red" />
    <rect x="50" y="70" width="100" height="8" rx="2" fill="#30363d" />
    <rect x="50" y="90" width="90" height="8" rx="2" className="animate-text-highlight-green" />
    <rect x="50" y="110" width="100" height="8" rx="2" fill="#30363d" />
    <rect x="45" y="20" width="110" height="3" fill="#39d3d3" className="animate-scan-line" filter="url(#glow)" />
  </svg>
);

export const ImageForensicsAnimation: React.FC = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="20" y="10" width="160" height="130" rx="5" fill="transparent" stroke="#30363d" strokeWidth="2" className="group-hover:stroke-cyber-cyan transition-colors duration-300"/>
    <circle cx="60" cy="45" r="15" fill="#ffd700" className="opacity-70" />
    <path d="M40 120 L80 70 L120 120 Z" fill="#8b949e" className="opacity-70" />
    <path d="M100 120 L140 80 L180 120 Z" fill="#8b949e" className="opacity-70" />
    <g className="animate-glitch-flicker" style={{ animationDelay: '0.5s'}}>
      <rect x="135" y="75" width="10" height="10" fill="#ff3131" />
      <rect x="140" y="90" width="10" height="10" fill="#39d3d3" />
    </g>
    <g className="animate-move-magnifier">
      <circle cx="0" cy="0" r="20" stroke="#c9d1d9" strokeWidth="3" fill="rgba(13, 17, 23, 0.5)" />
      <line x1="15" y1="15" x2="30" y2="30" stroke="#c9d1d9" strokeWidth="3" />
    </g>
  </svg>
);