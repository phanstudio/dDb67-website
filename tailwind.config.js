/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {      
            colors: {
                'degen-black': '#050505',
                'degen-gray': '#1a1a1a',
                'degen-dirty-gray': '#2d2d2d',
                'toxic-green': '#39ff14',
                'burnt-orange': '#ff4500',
                'acid-yellow': '#eeff00',
                'electric-blue': '#00f3ff',
                'off-white': '#e0e0e0',
            },
            fontFamily: {
                'brutal': ['"Archivo Black"', 'Impact', 'sans-serif'],
                'mono': ['"Courier Prime"', '"VT323"', 'monospace'],
                'glitch': ['"Rubik Glitch"', 'cursive'],
                'ransom': ['"Special Elite"', 'cursive'], // Good for ransom-note style
                'valentine': ['"Valentine Delight"', 'cursive'],
                'inter': ['"Inter"', 'sans-serif'],
                'sans': [
                    "Roboto",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Arial",
                    "sans-serif",
                  ],
            },
            backgroundImage: {
                'noise': "url('/noise.png')", // Will check if I can generate or use CSS gradient
                'paper': "url('/paper-texture.png')",
                'grid': "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
            },
            animation: {
                'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
                'glitch': 'glitch 1s linear infinite',
                'spin-slow': 'spin 12s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                shake: {
                    '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                    '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                    '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                    '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
                },
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
