import React, { useState } from 'react';

interface InputFormProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length < 50) {
      setError('Please enter at least 50 characters of text to analyze.');
      return;
    }
    setError('');
    onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Paste the news article text or URL here... (minimum 50 characters)"
          className="w-full h-48 p-4 text-cyber-text-secondary bg-cyber-bg-dark border-2 border-cyber-border rounded-lg focus:ring-2 focus:ring-cyber-cyan focus:border-cyber-cyan transition-all resize-none placeholder:text-cyber-text-secondary/50"
          disabled={isLoading}
          aria-label="Article text input"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="px-8 py-3 font-bold text-cyber-bg bg-cyber-cyan rounded-md transition-all duration-300 shadow-cyber-glow-cyan hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
    </form>
  );
};

export default InputForm;
