import React from 'react';
import { Difficulty, Language } from '../types';
import { RotateCcw } from 'lucide-react';

interface GameControlsProps {
    currentDifficulty: Difficulty;
    currentLanguage: Language;
    onDifficultyChange: (difficulty: Difficulty) => void;
    onLanguageChange: (language: Language) => void;
    onRestart: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({ 
    currentDifficulty, 
    currentLanguage,
    onDifficultyChange, 
    onLanguageChange,
    onRestart 
}) => {
    return (
        <div className="flex flex-row items-center justify-between w-full p-2 bg-white rounded-lg shadow-sm border border-slate-200 gap-2">
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar flex-1">
                {/* Language Selector */}
                <div className="flex items-center gap-1.5">
                    <span className="hidden sm:inline text-xs font-medium text-slate-500 uppercase tracking-wider">Lang:</span>
                    <div className="flex gap-1">
                        {Object.values(Language).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => onLanguageChange(lang)}
                                className={`px-2 py-1 text-[10px] sm:text-xs font-medium rounded transition-colors whitespace-nowrap ${
                                    currentLanguage === lang
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Difficulty Selector */}
                <div className="flex items-center gap-1.5">
                    <span className="hidden sm:inline text-xs font-medium text-slate-500 uppercase tracking-wider">Diff:</span>
                    <div className="flex gap-1">
                        {Object.values(Difficulty).map((diff) => (
                            <button
                                key={diff}
                                onClick={() => onDifficultyChange(diff)}
                                className={`px-2 py-1 text-[10px] sm:text-xs font-medium rounded transition-colors whitespace-nowrap ${
                                    currentDifficulty === diff
                                        ? 'bg-slate-800 text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                {diff}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            <button
                onClick={onRestart}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-medium rounded-md transition-colors active:scale-95"
            >
                <RotateCcw size={14} />
                <span className="hidden sm:inline">New Game</span>
                <span className="sm:hidden">New</span>
            </button>
        </div>
    );
};