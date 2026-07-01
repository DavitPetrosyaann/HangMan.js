import React from 'react';
import { GameStatus } from '../types';
import { Trophy, Frown, RotateCcw } from 'lucide-react';

interface GameOverModalProps {
    status: GameStatus;
    word: string;
    onRestart: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({ status, word, onRestart }) => {
    if (status === 'PLAYING') return null;

    const isWin = status === 'WON';
    const isLost = status === 'LOST';

    // Delay the modal if lost to allow the falling letters and swinging man animations to play
    const overlayClass = `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm ${
        isLost ? 'animate-delayed-fade-in' : 'animate-fade-in'
    }`;

    const modalClass = `bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center ${
        isLost ? 'animate-delayed-pop' : 'animate-pop'
    }`;

    return (
        <div className={overlayClass}>
            <div className={modalClass}>
                <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4 ${
                    isWin ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                    {isWin ? <Trophy size={32} /> : <Frown size={32} />}
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    {isWin ? 'You Won!' : 'Game Over'}
                </h2>
                
                <p className="text-slate-600 mb-6">
                    {isWin ? 'Great job guessing the word:' : 'The word was:'}
                    <br />
                    <span className="text-xl font-bold text-slate-900 tracking-widest mt-2 block">
                        {word}
                    </span>
                </p>
                
                <button
                    onClick={onRestart}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl transition-colors active:scale-95"
                >
                    <RotateCcw size={20} />
                    Play Again
                </button>
            </div>
        </div>
    );
};