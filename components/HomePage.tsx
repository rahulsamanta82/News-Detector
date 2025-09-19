import React from 'react';
import { TextAnalysisAnimation, ImageForensicsAnimation } from './animations/FeatureAnimations';

interface HomePageProps {
  onGetStarted: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGetStarted }) => {
  return (
    <div className="text-center flex flex-col items-center animate-fade-in-up">
      <p className="mt-4 text-lg sm:text-xl text-cyber-text-secondary max-w-2xl" style={{ animationDelay: '0.2s' }}>
        Unmask the Truth in a Digital World.
      </p>
      <h2 className="text-4xl sm:text-6xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan to-cyber-magenta" style={{ animationDelay: '0.4s' }}>
        AI-Powered News Authenticator
      </h2>
      <p className="mt-6 text-base sm:text-lg text-cyber-text-secondary max-w-3xl leading-relaxed" style={{ animationDelay: '0.6s' }}>
        In an era of rampant misinformation, Synthetica provides an advanced AI-driven tool to analyze news articles and images. Paste a link or upload a file and get an instant, in-depth verdict on its authenticity.
      </p>

      <div className="mt-12" style={{ animationDelay: '0.8s' }}>
        <button
          onClick={onGetStarted}
          className="px-10 py-4 text-xl font-bold text-cyber-bg bg-cyber-cyan rounded-md transition-all duration-300 shadow-cyber-glow-cyan hover:scale-105 animate-glow-pulse"
        >
          Start Analyzing
        </button>
      </div>

      <div className="mt-24 w-full max-w-4xl flex flex-col gap-16">
        <FeatureSection
          animation={<TextAnalysisAnimation />}
          title="Advanced Text Analysis"
          description="Our AI engine goes beyond simple keyword matching. It performs semantic analysis to understand context, tone, and intent. It meticulously scans articles for logical fallacies, emotional manipulation, and propaganda techniques, then cross-references claims against a vast database of trusted sources to give you a nuanced and reliable verdict."
          align="left"
          delay="1s"
        />
        <FeatureSection
          animation={<ImageForensicsAnimation />}
          title="Deep Image Forensics"
          description="Identify sophisticated, AI-generated images (GANs) or professionally manipulated photos. Our deep-learning model is trained to detect tell-tale signs of digital alteration, such as unnatural textures, lighting inconsistencies, pixel-level anomalies, and compression artifacts that are often invisible to the naked eye."
          align="right"
          delay="1.2s"
        />
      </div>
    </div>
  );
};

interface FeatureSectionProps {
  animation: React.ReactNode;
  title: string;
  description: string;
  align: 'left' | 'right';
  delay: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ animation, title, description, align, delay }) => {
  const alignmentClasses = align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';
  
  return (
    <div 
      className={`group flex flex-col items-center gap-8 text-center md:text-left md:gap-12 animate-fade-in-up ${alignmentClasses}`}
      style={{ animationDelay: delay }}
    >
      <div className="w-64 h-48 flex-shrink-0">
        {animation}
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-cyber-cyan group-hover:text-cyber-magenta transition-colors duration-300">{title}</h3>
        <p className="mt-2 text-cyber-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};


export default HomePage;