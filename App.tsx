import React, { useState, useEffect, useCallback } from 'react';
import { Difficulty, Language, GameState, GameStatus } from './types';
import { WORD_BANKS, ALPHABETS, MAX_MISTAKES } from './constants';
import { HangmanFigure } from './components/HangmanFigure';
import { WordDisplay } from './components/WordDisplay';
import { Keyboard } from './components/Keyboard';
import { GameControls } from './components/GameControls';
import { GameOverInline } from './components/GameOverInline';

const getRandomWord = (language: Language, difficulty: Difficulty): string => {
    const words = WORD_BANKS[language][difficulty];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>({
        word: getRandomWord(Language.EN, Difficulty.MEDIUM),
        guessedLetters: new Set<string>(),
        difficulty: Difficulty.MEDIUM,
        language: Language.EN,
        status: 'PLAYING'
    });

    const mistakes = Array.from(gameState.guessedLetters).filter(
        letter => !gameState.word.includes(letter)
    ).length;

    const isWinner = gameState.word.split('').every(letter => gameState.guessedLetters.has(letter));
    const isLoser = mistakes >= MAX_MISTAKES;

    useEffect(() => {
        if (gameState.status === 'PLAYING') {
            if (isWinner) {
                setGameState(prev => ({ ...prev, status: 'WON' }));
            } else if (isLoser) {
                setGameState(prev => ({ ...prev, status: 'LOST' }));
            }
        }
    }, [isWinner, isLoser, gameState.status]);

    const handleGuess = useCallback((letter: string) => {
        const upperLetter = letter.toUpperCase();
        const currentAlphabet = ALPHABETS[gameState.language];
        
        if (
            gameState.status !== 'PLAYING' || 
            gameState.guessedLetters.has(upperLetter) ||
            !currentAlphabet.includes(upperLetter)
        ) {
            return;
        }

        setGameState(prev => {
            const newGuessedLetters = new Set(prev.guessedLetters);
            newGuessedLetters.add(upperLetter);
            return { ...prev, guessedLetters: newGuessedLetters };
        });
    }, [gameState.status, gameState.guessedLetters, gameState.language]);

    const startNewGame = useCallback((
        difficulty: Difficulty = gameState.difficulty,
        language: Language = gameState.language
    ) => {
        setGameState({
            word: getRandomWord(language, difficulty),
            guessedLetters: new Set<string>(),
            difficulty,
            language,
            status: 'PLAYING'
        });
    }, [gameState.difficulty, gameState.language]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            
            const key = e.key.toUpperCase();
            const currentAlphabet = ALPHABETS[gameState.language];
            
            if (currentAlphabet.includes(key)) {
                handleGuess(key);
            } else if (e.key === 'Enter' && gameState.status !== 'PLAYING') {
                startNewGame();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleGuess, gameState.status, startNewGame, gameState.language]);

    return (
        <div className="h-full w-full flex flex-col items-center p-2 sm:p-4 box-border max-w-4xl mx-auto">
            <header className="flex-shrink-0 text-center mb-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Hangman
                </h1>
            </header>

            <div className="flex-shrink-0 w-full mb-2">
                <GameControls 
                    currentDifficulty={gameState.difficulty}
                    currentLanguage={gameState.language}
                    onDifficultyChange={(diff) => startNewGame(diff, gameState.language)}
                    onLanguageChange={(lang) => startNewGame(gameState.difficulty, lang)}
                    onRestart={() => startNewGame()}
                />
            </div>

            <main className="flex-1 w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 min-h-0">
                <div className="flex flex-col items-center justify-center flex-shrink-0 h-32 sm:h-40 md:h-full md:max-h-[35vh] aspect-[3/4]">
                    <HangmanFigure mistakes={mistakes} status={gameState.status} />
                    <div className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                        Lives: <span className="text-slate-800 font-bold">{MAX_MISTAKES - mistakes}</span>
                    </div>
                </div>
                
                <div className="flex-1 w-full flex items-center justify-center min-h-0 overflow-hidden">
                    <WordDisplay 
                        key={gameState.word} // Forces remount when the word changes
                        word={gameState.word} 
                        guessedLetters={gameState.guessedLetters}
                        status={gameState.status}
                    />
                </div>
            </main>

            <div className="flex-shrink-0 w-full h-[35vh] min-h-[220px] relative mt-2">
                <Keyboard 
                    key={gameState.language} // Forces complete remount of the keyboard when language changes
                    alphabet={ALPHABETS[gameState.language]}
                    guessedLetters={gameState.guessedLetters}
                    word={gameState.word}
                    onGuess={handleGuess}
                    status={gameState.status}
                />
                <GameOverInline 
                    status={gameState.status}
                    word={gameState.word}
                    onRestart={() => startNewGame()}
                />
            </div>
        </div>
    );
};

export default App;