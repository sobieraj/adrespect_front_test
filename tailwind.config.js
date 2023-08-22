/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': {
          DEFAULT: '#000000',
          'light': '#111111'
        },
        'green': '#1B5B31',
        'grey': '#F5F0EC',
        'beige': '#DCC1AB'
      },
      borderRadius: {
        '4xl': '1.75rem'
      },
      margin: {
        'mb-16.5': '4.5rem'
      },
      boxShadow: {
        'custom': '0 0 100vh 40vh #DCC1AB',
      },
      fontSize: {
        '4.5xl': [
          '2.5rem', {
            lineHeight: '3rem'
          }
        ]
      },
      backgroundImage: {
        'loupe': "url('../src/images/icon-loupe.png')"
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'mont': ['Montserrat', 'sans-serif'],
      'icomoon': ['icomoon']
    },
  },
  plugins: [],
}

