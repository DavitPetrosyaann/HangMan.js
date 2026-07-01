import React from 'react';
import { GameStatus } from '../types';

interface HangmanFigureProps {
    mistakes: number;
    status: GameStatus;
}

export const HangmanFigure: React.FC<HangmanFigureProps> = ({ mistakes, status }) => {
    const isLost = status === 'LOST';

    return (
        <div className="flex justify-center items-center p-2 bg-white rounded-xl shadow-sm border border-slate-200 h-full w-full">
            <svg 
                viewBox="0 0 200 250" 
                className="w-full h-full stroke-slate-800 fill-none transition-all duration-300" 
                strokeWidth="6" 
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Base Structure (Always visible) */}
                <g className="stroke-slate-300">
                    {/* Base */}
                    <line x1="20" y1="230" x2="100" y2="230" />
                    {/* Pole */}
                    <line x1="60" y1="20" x2="60" y2="230" />
                    {/* Top */}
                    <line x1="60" y1="20" x2="140" y2="20" />
                </g>

                {/* Hangman Parts (Appear based on mistakes, swing when lost) */}
                <g 
                    className={`stroke-slate-800 transition-opacity duration-300 ${isLost ? 'animate-swing' : ''}`}
                    style={{ transformOrigin: '140px 20px' }}
                >
                    {/* Rope */}
                    <line x1="140" y1="20" x2="140" y2="50" className="stroke-slate-300" />

                    {/* Head */}
                    {mistakes > 0 && (
                        <circle cx="140" cy="70" r="20" className="animate-fade-in" />
                    )}
                    {/* Body */}
                    {mistakes > 1 && (
                        <line x1="140" y1="90" x2="140" y2="150" className="animate-fade-in" />
                    )}
                    {/* Left Arm */}
                    {mistakes > 2 && (
                        <line x1="140" y1="110" x2="110" y2="140" className="animate-fade-in" />
                    )}
                    {/* Right Arm */}
                    {mistakes > 3 && (
                        <line x1="140" y1="110" x2="170" y2="140" className="animate-fade-in" />
                    )}
                    {/* Left Leg */}
                    {mistakes > 4 && (
                        <line x1="140" y1="150" x2="110" y2="190" className="animate-fade-in" />
                    )}
                    {/* Right Leg */}
                    {mistakes > 5 && (
                        <line x1="140" y1="150" x2="170" y2="190" className="animate-fade-in stroke-red-500" />
                    )}
                </g>
            </svg>
        </div>
    );
};