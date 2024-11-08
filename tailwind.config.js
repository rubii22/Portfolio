/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',  // Ensure all paths are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path if needed
  ],
  theme: {
    extend: {
      // Custom animations and keyframes for skills section
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 8s ease infinite',
        pulse: 'pulse 2s ease-in-out infinite', // can be applied for any text pulse
        'scale-and-rotate': 'scale-rotate 0.5s ease-in-out', // for icon hover effects
      },
    },
  },
  plugins: [],
};

// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path if needed
  ],
  theme: {
    extend: {
      // Custom animations and keyframes for projects section
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 8s ease infinite',
      },
    },
  },
  plugins: [],
};
