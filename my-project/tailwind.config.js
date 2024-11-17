/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:["Montserrat"],
        HindSiliguri:["Hind Siliguri"],
        Lora:["Lora"],
        MontBSub:["Montserrat-SubrayadaB"],
        MontRSub:["Montserrat-SubrayadaR"]
      },
      colors: {
        brandPrimary: '#3cbe70',
        brandBackground: '#fff9e5',
        brandAccent: "#861313",
        brandSecondary: '#7eaefb',
        brandText: '#1c1c1c'
      },
      gradients: {
        brandGradient: 'linear-gradient(to right, #0070E1, #00FF70)',
      },
    },

  },
  plugins: [],
}