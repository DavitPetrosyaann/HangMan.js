import React from 'react';
import { GameStatus } from '../types';

interface KeyboardProps {
    alphabet: string[];
    guessedLetters: Set<string>;
    word: string;
    onGuess: (letter: string) => void;
    status: GameStatus;
}

export const Keyboard: React.FC<KeyboardProps> = ({ alphabet, guessedLetters, word, onGuess, status }) => {
    const isGameOver = status !== 'PLAYING';
    const isLost = status === 'LOST';

    return (
        <div className="absolute inset-0 flex flex-wrap justify-center content-start gap-1 sm:gap-1.5 md:gap-2 p-1 z-10 overflow-visible">
            {alphabet.map((letter) => {
                const isGuessed = guessedLetters.has(letter);
                const isCorrect = isGuessed && word.includes(letter);
                const isWrong = isGuessed && !word.includes(letter);

                // Slightly smaller base sizes to accommodate up to 38 letters (Armenian) without scrolling
                let buttonClass = "w-7 h-9 sm:w-8 sm:h-10 md:w-10 md:h-12 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-200 shadow-sm flex items-center justify-center select-none ";

                if (isCorrect) {
                    buttonClass += "bg-green-500 text-white border-green-600 shadow-inner opacity-90";
                } else if (isWrong) {
                    buttonClass += "bg-slate-300 text-slate-500 opacity-50 cursor-not-allowed";
                } else {
                    buttonClass += "bg-white text-slate-800 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 active:scale-95 cursor-pointer";
                }

                let fallDelay = '0s';
                
                // If the letter is wrong, it falls immediately
                if (isWrong) {
                    buttonClass += " animate-fall pointer-events-none";
                    fallDelay = '0s';
                } 
                // If the game is lost, all remaining letters fall with a staggered delay
                else if (isLost) {
                    buttonClass += " animate-fall pointer-events-none";
                    // Use a stable pseudo-random delay based on the letter to prevent animation glitches on re-renders
                    fallDelay = `${(letter.charCodeAt(0) * 23 % 50) / 100}s`;
                }

                return (
                    <button
                        key={letter}
                        onClick={() => onGuess(letter)}
                        disabled={isGuessed || isGameOver}
                        className={buttonClass}
                        style={{ animationDelay: fallDelay }}
                        aria-label={`Guess letter ${letter}`}
                        aria-disabled={isGuessed || isGameOver}
                    >
                        {letter}
                    </button>
                );
            })}
        </div>
    );
};