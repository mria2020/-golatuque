"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale } from "../../../i18n/config";

export default function CalculatorPage({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark antialiased">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href={`/${lang}`} className="p-1 -ml-1 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </Link>
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-primary tracking-tighter flex items-center">
                                G<span className="material-symbols-outlined text-xl -ml-0.5">place</span>
                            </span>
                            <span className="text-lg font-bold text-gray-900 dark:text-white -ml-0.5">latuque</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-2 rounded-full bg-green-50 dark:bg-green-900/30 text-primary hover:bg-green-100 dark:hover:bg-green-900/50 transition">
                            <span className="material-symbols-outlined text-xl">help</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col pt-16 h-full relative max-w-md mx-auto w-full bg-white dark:bg-surface-dark">
                {/* Map Container */}
                <div className="relative w-full map-container z-0 bg-gray-200">
                    <div className="w-full h-full relative z-0" id="map">
                        <img
                            alt="Map"
                            className="w-full h-full object-cover grayscale-[20%] opacity-90"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8YIsIuhsn_LdAdsMajOnAyy7XjLMBbd-gZvAdLZADYhc-LT_2ZvSrAf6BYX9GPXNvabPVrsbgnxvZr8dC7EOLWM0Yl4d6z1iNW0Cpf3kUEsJKx8Bz8ZAr_KSUUXm_de9fFoRtVi62yFNVn4ZmV_5ODc7ETPBQEX36oDF49o6Qe7-CSwwQkPAL8yh-up_yjoowtAuK0I-lbm0Mt_mTdqTHMCFF0fBRQ5hDtMz37faVPmfbxkTpfl8GuSvyRL2OQv6r6b8Jyxlaakc"
                        />
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 400 }}>
                            <path className="drop-shadow-md" d="M 120 180 Q 180 220 250 150 T 320 100" fill="none" stroke="#22c55e" strokeDasharray="10 0" strokeLinecap="round" strokeWidth="6"></path>
                            <circle cx="120" cy="180" fill="white" r="8" stroke="#22c55e" strokeWidth="4"></circle>
                            <circle cx="320" cy="100" fill="#22c55e" r="8" stroke="white" strokeWidth="2"></circle>
                        </svg>
                        <div className="absolute top-4 left-4 z-[400] bg-white/90 dark:bg-surface-dark/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold shadow-sm text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-600">
                            Zone Urbaine
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-surface-dark to-transparent z-10"></div>
                </div>

                {/* Input Card */}
                <div className="flex-1 flex flex-col bg-surface-light dark:bg-surface-dark relative z-20 rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] -mt-6">
                    <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mt-3 mb-2"></div>
                    <div className="px-6 pt-2 pb-6 flex-1 overflow-y-auto">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Planifier un trajet</h2>

                        <div className="relative space-y-6">
                            <div className="absolute left-[19px] top-[18px] bottom-[70px] w-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>

                            {/* Departure */}
                            <div className="relative z-10 group">
                                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5 block ml-10">Départ</label>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 border-2 border-primary/20 group-focus-within:border-primary transition-colors">
                                        <span className="material-symbols-outlined text-primary text-[20px]">my_location</span>
                                    </div>
                                    <div className="flex-1 relative">
                                        <input
                                            className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 text-gray-900 dark:text-white font-medium focus:ring-2 focus:ring-primary/50 shadow-sm"
                                            placeholder="D'où partez-vous?"
                                            type="text"
                                            defaultValue="320 Rue Saint-Joseph"
                                        />
                                        <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                            <span className="material-symbols-outlined text-[20px]">close</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Destination */}
                            <div className="relative z-10 group">
                                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5 block ml-10">Destination</label>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 border-2 border-accent-red/20 group-focus-within:border-accent-red transition-colors">
                                        <span className="material-symbols-outlined text-accent-red text-[20px]">location_on</span>
                                    </div>
                                    <div className="flex-1 relative">
                                        <input
                                            className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 text-gray-900 dark:text-white font-medium focus:ring-2 focus:ring-accent-red/50 shadow-sm pr-10 text-ellipsis overflow-hidden whitespace-nowrap"
                                            type="text"
                                            defaultValue="Parc des Chutes-de-la-Petite-Rivière-Bostonnais"
                                        />
                                        <div className="absolute right-3 top-3 text-gray-400">
                                            <span className="material-symbols-outlined text-[20px]">search</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Dropdown (Hidden by default in HTML, keeping generic structure) */}
                                <div className="absolute left-10 right-0 top-[105%] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 py-1 hidden">
                                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-gray-400 text-sm">history</span>
                                        <span className="text-sm text-gray-700 dark:text-gray-200 truncate">Parc des Chutes...</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Toggle Switch */}
                        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-1.5 rounded-xl flex relative">
                            <div
                                className={`w-1/2 h-full absolute top-0 p-1.5 transition-all duration-300 ease-out transform ${tripType === 'one-way' ? 'left-0 translate-x-0' : 'left-0 translate-x-full'}`}
                            >
                                <div className="w-full h-full bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"></div>
                            </div>
                            <button
                                className={`flex-1 relative z-10 py-2.5 text-sm font-semibold text-center flex items-center justify-center gap-2 transition-colors duration-300 ${tripType === 'one-way' ? 'text-primary dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                                onClick={() => setTripType('one-way')}
                            >
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span> Aller simple
                            </button>
                            <button
                                className={`flex-1 relative z-10 py-2.5 text-sm font-medium text-center flex items-center justify-center gap-2 transition-colors duration-300 ${tripType === 'round-trip' ? 'text-primary dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                                onClick={() => setTripType('round-trip')}
                            >
                                <span className="material-symbols-outlined text-[18px]">sync_alt</span> Aller-retour
                            </button>
                        </div>
                    </div>

                    {/* Bottom Summary Panel */}
                    <div className="bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-700 px-6 py-4 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] relative z-30">
                        <div className="flex items-end justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total estimé</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">12.50</span>
                                    <span className="text-xl font-bold text-gray-500 dark:text-gray-400">$</span>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-1">
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Distance</p>
                                    <p className="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1 justify-end">
                                        4.2 <span className="text-xs font-medium text-gray-500">km</span>
                                    </p>
                                </div>
                                <div className="w-px bg-gray-200 dark:bg-gray-700 h-8 self-center"></div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Durée</p>
                                    <p className="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1 justify-end">
                                        8 <span className="text-xs font-medium text-gray-500">min</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-green-500/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 text-lg">
                            <span>Réserver ce trajet</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
