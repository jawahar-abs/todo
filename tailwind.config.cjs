/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {

      colors: {
        // Customize theme colors if needed
        light:{

          lightText: 'bg-white',
          lightBg: 'bg-indigo-400',
        },
        dark:{
          darkBg: '#1a1a1a',
        darkText: '#ffffff',
        }
      },
    },
  },
  plugins: [],
}

