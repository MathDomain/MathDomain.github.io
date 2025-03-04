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
        brandText: '#1c1c1c',
        brand100:"#011906",
        brand200:"#04711a",
        brand300:"#08C92F",
        brand400:"#36F75D",
        brand500:"#6FFC8B",
        brandMid:"#245b30",
      },
      backgroundImage: {
        brandGradient: 'linear-gradient(to right, #08C92F, #04711A)',
      },
    },

  },
  plugins: [],
}