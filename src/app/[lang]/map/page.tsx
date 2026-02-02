"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Locale } from "../../../i18n/config";

export default function MapPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = use(params);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    // In a real app, this would be draggable. 
    // For now, simple toggling or fixed height.
    // The design implies it can be dragged or is at least a sheet.

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden h-screen w-full relative">
            {/* 1. FULL SCREEN MAP LAYER */}
            <div className="absolute inset-0 z-0 bg-slate-200 dark:bg-slate-800 w-full h-full">
                <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYj0-h27-Nl7DsuL3WRKcaEeX355osCbuNYgeZck7a-tYcNg5pIka4dJCHqwcu4d8-d7ZHx3l0onhQLrlha1bsKPkCSQvrOeXF0tVEOtnnTxAOFzNXqEnx-tTQ0sC5vsP_frOS1lVedrV1hX3SoTbcBKqyfP5Jz-1x0GpgvJlNPQ3GRvvJ_bFq34NGv4DeO9Dy2SJ8c3RqQeuL9mdfBEBDVIAej7_-ekIw73zp0I1pw_54AsR8S_zzuRcLRhc8oTt6w_S5bNwlmYY')" }}
                    role="img"
                    aria-label="Map showing the Haute-Mauricie region with roads and forest zones"
                >
                    {/* Simulated Map Polygons (Visual cues for zones) */}
                    {/* Local Zone (Center) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-zone-local/20 border-2 border-zone-local rounded-full blur-[1px]"></div>
                    {/* Regional Zone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 border border-emerald-500 rounded-full blur-[2px]"></div>

                    {/* Map Copyright/Attribution (Bottom Right) */}
                    <div className="absolute bottom-32 right-2 text-[10px] text-slate-500 bg-white/60 dark:bg-black/40 px-1 rounded pointer-events-none">
                        © OpenStreetMap contributors
                    </div>
                </div>
            </div>

            {/* 2. FLOATING HEADER (TopAppBar) */}
            <div className="absolute top-0 left-0 right-0 z-20 pt-safe-top">
                <div className="flex items-center p-4 gap-4 bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent pb-8">
                    <Link href={`/${lang}`} className="flex items-center justify-center size-10 rounded-full glass-panel shadow-sm text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-2xl">arrow_back</span>
                    </Link>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm truncate flex-1">
                        Territoire Couvert
                    </h1>
                </div>
            </div>

            {/* 3. ZONE LEGEND OVERLAY */}
            <div className="absolute top-24 left-4 z-20 max-w-[200px]">
                <div className="glass-panel p-3 rounded-lg shadow-float border border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Légende</h3>
                    <div className="flex items-center gap-2">
                        <span className="size-3 rounded-full bg-zone-local border border-zone-local/30 shadow-sm"></span>
                        <span className="text-sm font-medium leading-none">Zone Locale</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="size-3 rounded-full bg-emerald-500 border border-emerald-500/30 shadow-sm"></span>
                        <span className="text-sm font-medium leading-none">Zone Régionale</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="size-3 rounded-full bg-amber-400 border border-amber-400/30 shadow-sm"></span>
                        <span className="text-sm font-medium leading-none">Zone Étendue</span>
                    </div>
                </div>
            </div>

            {/* 4. MAP CONTROLS & ACTION */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end gap-4">
                {/* Zoom Controls */}
                <div className="flex flex-col rounded-lg shadow-float overflow-hidden border border-slate-100 dark:border-slate-700">
                    <button className="flex size-10 items-center justify-center glass-panel hover:bg-slate-50 dark:hover:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                        <span className="material-symbols-outlined text-slate-700 dark:text-white">add</span>
                    </button>
                    <button className="flex size-10 items-center justify-center glass-panel hover:bg-slate-50 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-slate-700 dark:text-white">remove</span>
                    </button>
                </div>
            </div>

            {/* Locate Me FAB (Positioned above bottom sheet) */}
            <div className="absolute right-4 bottom-[30%] z-20">
                <button className="flex size-14 items-center justify-center rounded-2xl bg-zone-local text-white shadow-lg shadow-zone-local/30 hover:bg-zone-local/90 transition-transform active:scale-95">
                    <span className="material-symbols-outlined text-[28px]">my_location</span>
                </button>
            </div>

            {/* 5. BOTTOM SHEET / INFO DRAWER */}
            <div className="absolute bottom-0 left-0 right-0 z-30 h-[28%] min-h-[220px] glass-panel rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex flex-col transition-all duration-300">
                {/* Handle */}
                <div className="w-full flex items-center justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing">
                    <div className="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 no-scrollbar">
                    <div className="flex flex-col gap-4">
                        {/* Header Section */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Desservant la Haute-Mauricie</h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Service de transport adapté et collectif</p>
                            </div>
                            <button className="text-zone-local hover:bg-zone-local/10 p-2 rounded-full -mr-2">
                                <span className="material-symbols-outlined">info</span>
                            </button>
                        </div>

                        {/* Description Text (SEO Optimized) */}
                        <div className="prose prose-sm prose-slate dark:prose-invert">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                                Notre service couvre le noyau urbain de <strong className="text-slate-900 dark:text-white">La Tuque</strong> ainsi que les secteurs ruraux incluant La Croche, La Bostonnais, et le Lac-Édouard.
                            </p>
                            <div className="mt-3 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 whitespace-nowrap">
                                    Route 155
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 whitespace-nowrap">
                                    Route 25
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300 whitespace-nowrap">
                                    Taxi La Tuque
                                </span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button className="w-full mt-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 active:opacity-90 transition-opacity">
                            <span className="material-symbols-outlined text-lg">list</span>
                            <span>Voir la liste des municipalités</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
