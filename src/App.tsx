import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Disclaimer from './components/Disclaimer';
import TitleScreen from './components/TitleScreen';
import GameHeader from './components/GameHeader';
import SceneIncitingIncident from './components/SceneIncitingIncident';
import PathDebitCard from './components/PathDebitCard';
import PathCreditCard from './components/PathCreditCard';
import PathGambling from './components/PathGambling';
import PathInvestment from './components/PathInvestment';
import PathBNPL from './components/PathBNPL';
import ReportCard from './components/ReportCard';
import { GameStats, PathType } from './types';

export default function App() {
  const [gameState, setGameState] = useState<'disclaimer' | 'title' | 'crossroads' | 'playing' | 'report'>('disclaimer');
  const [activePath, setActivePath] = useState<PathType>(null);
  
  // Player ledger parameters
  const [stats, setStats] = useState<GameStats>({
    cash: 500,
    debt: 0,
    creditScore: 650,
    happiness: 75
  });

  // Narrative summary to pass onto final report card
  const [pathExplanation, setPathExplanation] = useState<string>('');

  const handleResetGame = () => {
    setStats({
      cash: 500,
      debt: 0,
      creditScore: 650,
      happiness: 75
    });
    setActivePath(null);
    setPathExplanation('');
    setGameState('crossroads');
  };

  const handleSelectPath = (path: PathType) => {
    setActivePath(path);
    setGameState('playing');
  };

  const handleFinishPath = (explanation: string) => {
    setPathExplanation(explanation);
    setGameState('report');
  };

  const currentPathName = () => {
    if (!activePath) return undefined;
    const names: Record<string, string> = {
      debit: 'A - Standard Checking (Secure)',
      credit: 'B - Credit Build/Traps',
      gambling: 'C - Lottery Convenience store',
      investment: 'D - Compounding Investments',
      bnpl: 'E - Buy Now, Pay Later Split'
    };
    return names[activePath];
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-505 selection:text-white font-sans antialiased">
      <AnimatePresence mode="wait">
        
        {/* DISCLAIMER SCREEN */}
        {gameState === 'disclaimer' && (
          <motion.div
            key="disclaimer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <Disclaimer onAcknowledge={() => setGameState('title')} />
          </motion.div>
        )}

        {/* TITLE SCREEN */}
        {gameState === 'title' && (
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <TitleScreen onStart={() => setGameState('crossroads')} />
          </motion.div>
        )}

        {/* INCITING INCIDENT CROSSROADS */}
        {gameState === 'crossroads' && (
          <motion.div
            key="crossroads"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="flex flex-col min-h-screen"
          >
            <GameHeader stats={stats} onReset={handleResetGame} />
            <main className="flex-grow flex items-center justify-center">
              <SceneIncitingIncident onSelectPath={handleSelectPath} />
            </main>
          </motion.div>
        )}

        {/* PLAYING STATE SCENE ROUTERS */}
        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col min-h-screen"
          >
            <GameHeader stats={stats} currentPathName={currentPathName()} onReset={handleResetGame} />
            
            <main className="flex-grow flex items-center justify-center py-6">
              {activePath === 'debit' && (
                <PathDebitCard 
                  stats={stats} 
                  onUpdateStats={setStats} 
                  onFinish={handleFinishPath} 
                />
              )}
              {activePath === 'credit' && (
                <PathCreditCard 
                  stats={stats} 
                  onUpdateStats={setStats} 
                  onFinish={handleFinishPath} 
                />
              )}
              {activePath === 'gambling' && (
                <PathGambling 
                  stats={stats} 
                  onUpdateStats={setStats} 
                  onFinish={handleFinishPath} 
                />
              )}
              {activePath === 'investment' && (
                <PathInvestment 
                  stats={stats} 
                  onUpdateStats={setStats} 
                  onFinish={handleFinishPath} 
                />
              )}
              {activePath === 'bnpl' && (
                <PathBNPL 
                  stats={stats} 
                  onUpdateStats={setStats} 
                  onFinish={handleFinishPath} 
                />
              )}
            </main>
          </motion.div>
        )}

        {/* EVALUATION REPORT CARD SCREEN */}
        {gameState === 'report' && (
          <motion.div
            key="report"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col min-h-screen"
          >
            <GameHeader stats={stats} onReset={handleResetGame} />
            <main className="flex-grow flex items-center justify-center py-8">
              <ReportCard 
                stats={stats} 
                pathExplanation={pathExplanation} 
                onRestart={handleResetGame} 
              />
            </main>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
