import React from 'react';
import type { AnalysisResult } from '../types';
import { Verdict } from '../types';
import { CheckCircleIcon, XCircleIcon, QuestionMarkCircleIcon } from './icons/VerdictIcons';

interface ResultDisplayProps {
  result: AnalysisResult;
}

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
);


const getVerdictConfig = (verdict: Verdict) => {
  switch (verdict) {
    case Verdict.REAL:
      return {
        text: 'Authentic News',
        color: 'green',
        Icon: CheckCircleIcon,
      };
    case Verdict.LIKELY_REAL:
      return {
        text: 'Likely Authentic',
        color: 'green',
        Icon: CheckCircleIcon,
      };
    case Verdict.UNCERTAIN:
      return {
        text: 'Uncertain',
        color: 'yellow',
        Icon: QuestionMarkCircleIcon,
      };
    case Verdict.LIKELY_FAKE:
      return {
        text: 'Likely Misleading',
        color: 'orange',
        Icon: XCircleIcon,
      };
    case Verdict.FAKE:
      return {
        text: 'Misleading or Fake',
        color: 'red',
        Icon: XCircleIcon,
      };
    default:
      return {
        text: 'Analysis Complete',
        color: 'gray',
        Icon: QuestionMarkCircleIcon,
      };
  }
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const { text, color, Icon } = getVerdictConfig(result.verdict);
  const colorClasses = {
    bg: `bg-cyber-${color}/10`,
    border: `border-cyber-${color}`,
    text: `text-cyber-${color}`,
    shadow: `shadow-cyber-glow-${color}`,
  };

  const confidenceWidth = `${result.confidence}%`;
  const hasSources = result.sources && result.sources.length > 0;

  return (
    <div className={`border rounded-lg p-6 animate-fade-in-up ${colorClasses.bg} ${colorClasses.border} shadow-lg ${colorClasses.shadow}`}>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className={`flex-shrink-0 ${colorClasses.text}`}>
          <Icon className="w-16 h-16" />
        </div>
        <div className="flex-grow text-center sm:text-left">
          <h2 className={`text-2xl font-bold ${colorClasses.text}`}>{text}</h2>
          <p className="text-cyber-text-secondary mt-1">{result.summary}</p>
        </div>
        <div className="flex-shrink-0 text-center">
            <p className="text-sm text-cyber-text-secondary">CONFIDENCE</p>
            <p className={`text-4xl font-bold ${colorClasses.text}`}>{result.confidence}<span className="text-2xl">%</span></p>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-cyber-border rounded-full h-2.5">
          <div className={`bg-cyber-${color} h-2.5 rounded-full`} style={{ width: confidenceWidth }}></div>
        </div>
      </div>
      
      <div className="mt-6 border-t border-cyber-border/50 pt-6">
        <h3 className="text-lg font-semibold text-cyber-text">Key Reasoning Points</h3>
        <ul className="list-none mt-2 space-y-2">
          {result.reasoning.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className={`mr-3 mt-1 flex-shrink-0 text-cyber-${color}`}>›</span>
              <p className="text-cyber-text-secondary">{point}</p>
            </li>
          ))}
        </ul>
      </div>

      {hasSources && (
        <div className="mt-6 border-t border-cyber-border/50 pt-6">
            <h3 className="text-lg font-semibold text-cyber-text">Corroborating Sources</h3>
            <ul className="list-none mt-2 space-y-2">
                {result.sources.map((source, index) => (
                    <li key={index} className="flex items-start">
                        <LinkIcon className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-cyber-text-secondary" />
                        <a 
                            href={source.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-cyber-text-secondary hover:text-cyber-cyan hover:underline transition-colors truncate"
                            title={source.url}
                        >
                            {source.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;