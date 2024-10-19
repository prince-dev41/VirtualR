/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackBg: "#121212",
        orangeColor: "#F47015",
        orange2Color: "#B64613"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'paragraph': ['17px', {
          lineHeight: '1.75',
        }],
      },
    },
  },
  plugins: [],
}