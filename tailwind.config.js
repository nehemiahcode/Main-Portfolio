/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'mini-laptop': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'large-laptop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'extralarge-laptop': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {

    },
  },
  plugins: [],
}

