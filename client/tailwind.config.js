/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nova : ['Nova Square'],
        epilogue : ['Epilogue'],
        martian: [ 'Martian Mono', 'monospace'],
        nunito: ['Nunito Sans', 'sans-serif'],
        inter: ['Inter'],
      },
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
    keyframes: {
        'text-slide': {
            '0%, 16%': {
                transform: 'translateY(0%)',
            },
            '20%, 36%': {
                transform: 'translateY(-17%)',
            },
            '40%, 56%': {
                transform: 'translateY(-33.33%)',
            },
            '60%, 76%': {
                transform: 'translateY(-50%)',
            },
            '80%, 96%': {
                transform: 'translateY(-66.66%)',
            },
            '100%': {
                transform: 'translateY(-83.20%)',
            },
          },
        },
      },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  },
}
