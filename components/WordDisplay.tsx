import React from 'react';
import { GameStatus } from '../types';

interface WordDisplayProps {
    word: string;
    guessedLetters: Set<string>;
    status: GameStatus;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessedLetters, status }) => {
    return (
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 px-1 w-full">
            {word.split('').map((letter, index) => {
                const isGuessed = guessedLetters.has(letter);
                const isLost = status === 'LOST';
                const showLetter = isGuessed || isLost;
                
                // If lost and letter wasn't guessed, show it in red to indicate what was missed
                const letterColorClass = isLost && !isGuessed ? 'text-red-500' : 'text-slate-800';

                return (
                    <div 
                        key={index} 
                        className="flex flex-col items-center justify-end w-6 sm:w-8 md:w-10 h-8 sm:h-10 md:h-12 border-b-2 sm:border-b-4 border-slate-800"
                    >
                        <span 
                            className={`text-xl sm:text-2xl md:text-3xl font-bold uppercase transition-all duration-200 ${
                                showLetter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            } ${letterColorClass}`}
                        >
                            {showLetter ? letter : ''}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};