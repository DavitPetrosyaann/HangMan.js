import React from 'react';
import { GameStatus } from '../types';
import { Trophy, Frown, RotateCcw } from 'lucide-react';

interface GameOverInlineProps {
    status: GameStatus;
    word: string;
    onRestart: () => void;
}

export const GameOverInline: React.FC<GameOverInlineProps> = ({ status, word, onRestart }) => {
    if (status === 'PLAYING') return null;

    const isWin = status === 'WON';
    const isLost = status === 'LOST';

    // Delay the appearance if lost to allow the falling letters and swinging man animations to play
    const containerClass = `absolute inset-0 flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-sm z-20 rounded-xl ${
        isLost ? 'animate-delayed-fade-in' : 'animate-fade-in'
    }`;

    return (
        <div className={containerClass}>
            <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full ${
                    isWin ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                    {isWin ? <Trophy size={24} /> : <Frown size={24} />}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                    {isWin ? 'You Won!' : 'Game Over'}
                </h2>
            </div>
            
            <p className="text-sm sm:text-base text-slate-600 mb-4 text-center px-4">
                {isWin ? 'Great job guessing:' : 'The word was:'} 
                <span className="font-bold text-slate-900 ml-2 tracking-wider">{word}</span>
            </p>
            
            <button
                onClick={onRestart}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-sm sm:text-base font-semibold rounded-xl transition-colors active:scale-95 shadow-md"
            >
                <RotateCcw size={18} />
                Play Again
            </button>
        </div>
    );
};