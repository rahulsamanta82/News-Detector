import React, { useState } from 'react';
import InputForm from './InputForm';
import ImageInputForm from './ImageInputForm';
import Loader from './Loader';
import ResultDisplay from './ResultDisplay';
import { analyzeText, analyzeImage } from '../services/geminiService';
import type { AnalysisResult } from '../types';
import { InputType } from '../types';

const AnalyzerPage: React.FC = () => {
  const [inputType, setInputType] = useState<InputType>(InputType.ARTICLE);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTextAnalysis = async (text: string) => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const analysisResult = await analyzeText(text);
      setResult(analysisResult);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleImageAnalysis = async (image: File, prompt: string) => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const analysisResult = await analyzeImage(image, prompt);
      setResult(analysisResult);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    // Keep the current inputType selected
  };
  
  const switchInputType = (type: InputType) => {
      if (isLoading) return;
      handleReset();
      setInputType(type);
  };

  const tabs = [
    { type: InputType.ARTICLE, label: 'Article' },
    { type: InputType.IMAGE, label: 'Image' },
  ];

  const pageConfig = {
      [InputType.ARTICLE]: {
          title: "Analyze Article Authenticity",
          description: "Paste the full text of a news article or a URL below to get an AI-powered analysis of its potential bias and accuracy.",
      },
      [InputType.IMAGE]: {
          title: "Analyze Image Authenticity",
          description: "Upload an image to check for signs of manipulation or AI generation. You can add a question for more specific analysis.",
      }
  }

  return (
    <div className="w-full animate-fade-in-up">
      {!result && !isLoading && (
         <div className="text-center">
            <h2 className="text-3xl font-bold text-cyber-cyan">{pageConfig[inputType].title}</h2>
            <p className="mt-2 text-cyber-text-secondary">
                {pageConfig[inputType].description}
            </p>
         </div>
      )}
      
      <div className="mt-8">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="text-center p-6 bg-red-900/20 border border-red-500 rounded-lg">
            <h3 className="text-xl font-bold text-red-400">Analysis Failed</h3>
            <p className="mt-2 text-cyber-text-secondary">{error}</p>
            <button
                onClick={handleReset}
                className="mt-4 px-6 py-2 font-bold text-cyber-bg bg-red-400 rounded-md hover:bg-red-500 transition-colors"
            >
                Try Again
            </button>
          </div>
        ) : result ? (
           <div>
            <ResultDisplay result={result} />
            <div className="text-center mt-8">
                <button
                    onClick={handleReset}
                    className="px-6 py-2 font-bold text-cyber-cyan border-2 border-cyber-cyan rounded-md bg-cyber-bg/50 backdrop-blur-sm hover:bg-cyber-cyan hover:text-cyber-bg transition-all duration-300"
                >
                    Analyze Another
                </button>
            </div>
           </div>
        ) : (
          <div>
            <div className="mb-6 flex justify-center border-b border-cyber-border">
                {tabs.map((tab) => (
                    <button
                        key={tab.type}
                        onClick={() => switchInputType(tab.type)}
                        className={`px-6 py-3 text-sm font-bold transition-colors duration-300 border-b-2 ${
                            inputType === tab.type
                            ? 'border-cyber-cyan text-cyber-cyan'
                            : 'border-transparent text-cyber-text-secondary hover:text-cyber-text'
                        }`}
                        >
                        {tab.label}
                    </button>
                ))}
            </div>
            {inputType === InputType.ARTICLE && (
              <InputForm onSubmit={handleTextAnalysis} isLoading={isLoading} />
            )}
            {inputType === InputType.IMAGE && (
              <ImageInputForm onSubmit={handleImageAnalysis} isLoading={isLoading} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyzerPage;