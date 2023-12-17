/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       colors:{
        darkBlue:'#0E0C15',
        mainBlue:'#121825',
        borderBlue:'#222B44'
       }
    },
  },
  plugins: [],
};
