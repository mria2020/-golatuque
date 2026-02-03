import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3db856", // Brand Green
                "primary-dark": "#2EA84E",
                secondary: "#ea4335", // Brand Red
                "background-light": "#f8fafc", // Slate-50 - lighter, fresher
                "background-dark": "#0f172a", // Slate-900
                "surface-light": "#ffffff",
                "surface-dark": "#1e293b", // Slate-800
                "surface-dark-highlight": "#334155", // Slate-700

                // Map specific colors
                "zone-local": "#137fec",
                "zone-regional": "#10b981",
                "zone-extended": "#f59e0b",

                // Calculator compatibility mappings
                "accent-red": "#ea4335",
                "text-light": "#0f172a", // Slate-900 - readable
                "text-dark": "#f1f5f9", // Slate-100
                "text-msg": "#64748b", // Slate-500
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.75rem", // 12px
                xl: "1rem", // 16px
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
            boxShadow: {
                'float': '0 8px 30px rgba(0, 0, 0, 0.08)',
                'glow': '0 0 20px rgba(61, 184, 86, 0.3)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
