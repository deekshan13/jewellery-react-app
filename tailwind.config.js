/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ivory: {
                    50: '#FDFAF5',
                    100: '#FAF5EB',
                    200: '#F5ECD6',
                    300: '#EDE0C4',
                },
                gold: {
                    100: '#F5E9C8',
                    200: '#E8D8A0',
                    300: '#D4B86A',
                    400: '#C6A75E',
                    500: '#B8960C',
                    600: '#9A7B0A',
                },
                champagne: '#F7E7CE',
                maroon: {
                    800: '#4A0E1A',
                    900: '#2D0610',
                },
                charcoal: {
                    700: '#333333',
                    800: '#1A1A1A',
                    900: '#0D0D0D',
                },
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'Georgia', 'serif'],
                cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
                inter: ['Inter', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                widest2: '0.2em',
                widest3: '0.3em',
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #C6A75E 0%, #E8D8A0 50%, #C6A75E 100%)',
                'gold-gradient-h': 'linear-gradient(90deg, #C6A75E 0%, #E8D8A0 50%, #C6A75E 100%)',
                'dark-gradient': 'linear-gradient(135deg, #0D0D0D 0%, #2D0610 100%)',
                'hero-gradient': 'linear-gradient(160deg, #0D0D0D 0%, #1A1A1A 40%, #2D1810 100%)',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                floatY: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                scrollBounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(6px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                spinSlow: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                shimmer: 'shimmer 3s linear infinite',
                floatY: 'floatY 4s ease-in-out infinite',
                scrollBounce: 'scrollBounce 1.5s ease-in-out infinite',
                fadeInUp: 'fadeInUp 0.8s ease forwards',
                spinSlow: 'spinSlow 20s linear infinite',
            },
            boxShadow: {
                gold: '0 0 20px rgba(198, 167, 94, 0.3)',
                'gold-lg': '0 0 40px rgba(198, 167, 94, 0.4)',
                'gold-xl': '0 0 60px rgba(198, 167, 94, 0.5)',
                luxury: '0 20px 60px rgba(0,0,0,0.2)',
            },
        },
    },
    plugins: [],
}
