export enum Difficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD',
    EXPERT = 'EXPERT'
}

export enum Language {
    EN = 'EN',
    RU = 'RU',
    AM = 'AM'
}

export type GameStatus = 'PLAYING' | 'WON' | 'LOST';

export interface GameState {
    word: string;
    guessedLetters: Set<string>;
    difficulty: Difficulty;
    language: Language;
    status: GameStatus;
}