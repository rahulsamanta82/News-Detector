import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AnalyzerPage from './components/AnalyzerPage';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'analyzer'>('home');

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Header page={page} setPage={setPage} />
        <main className="mt-8 w-full">
          {page === 'home' && <HomePage onGetStarted={() => setPage('analyzer')} />}
          {page === 'analyzer' && <AnalyzerPage />}
        </main>
        <footer className="text-center text-cyber-text-secondary text-sm mt-12 pb-4">
            <p>&copy; {new Date().getFullYear()} Synthetica. AI analysis may not be 100% accurate.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;