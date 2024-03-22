/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        'purple': '#91288D',
        'purple1': '#CD9FCC',
        'beige': '#e8ded1',
      },
      
      fontSize:{
        xxs: '0.58rem',
        xxxs: '0.48rem',
        kh : '2rem',
      },
      display:['group-focus'],
    },
      
    
  },
  plugins: [],
}
