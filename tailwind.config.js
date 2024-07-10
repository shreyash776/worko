/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #000 30%, #1e2c3f 80%)',
      },
    },
  },
  plugins: [],
};

