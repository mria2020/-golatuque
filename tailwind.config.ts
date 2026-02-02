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
                secondary: "#ea4335", // Brand Red
                "background-light": "#f3f4f6", // Gray-100
                "background-dark": "#0f172a", // Slate-900
                "surface-light": "#ffffff",
                "surface-dark": "#1e293b", // Slate-800

                // Map specific colors
                "zone-local": "#137fec",
                "zone-regional": "#10b981",
                "zone-extended": "#f59e0b",

                // Calculator compatibility mappings
                "primary-dark": "#2EA84E", // Calculated darker shade of brand green
                "accent-red": "#ea4335", // Mapped to secondary
                "text-light": "#1f2937",
                "text-dark": "#f3f4f6",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["Noto Sans", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.75rem", // 12px
                xl: "1rem", // 16px
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
            boxShadow: {
                'float': '0 4px 12px rgba(0, 0, 0, 0.08)',
            }
        },
    },
    plugins: [],
};
export default config;
