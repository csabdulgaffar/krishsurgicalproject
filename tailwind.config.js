/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'moveRightThenLeft': 'moveRightThenLeft 5s linear infinite',
        'textGlowPink': 'textGlowPink 4s linear infinite',
        'attractText': 'attractText 3s linear infinite',
      },
      keyframes: {
        'moveRightThenLeft': {
          '0%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(100px)', // Move right
          },
          '50%': {
            transform: 'translateX(0px)', // Move left
          },
          '75%': {
            transform: 'translateX(-100px)', // Move left
          },
          '100%': {
            transform: 'translateX(0)', // Move left
          },
        },
        'textGlowPink': {
          '0%, 100%': {
            textShadow: '0 0 2px #ff007f, 0 0 3px #ff007f, 0 0 4px #ff007f ', // Pink glow effect
          },
          '50%': {
            textShadow: 'none', // No shadow at 50% to create a pulsating effect
          },
        },
        'attractText': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.02)',
          },
        },
      },
      height: {
        'fill': '700px'
      }

      ,
      minHeight: {
        '80vh': '80vh'
      },
      fontFamily: {
        'verdana': ['Verdana', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}