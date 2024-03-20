import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image' : "url('/li-bg.png')",
        'bg-image-she' : "url('/she.png')",
        'bg-image-we' : "url('/slayers.png')",
      }
    },
    backgroundSize:{
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
      '': ''
    },
    colors: {
      'warning':'#FF3131',
      'success':'#39FF14',
      'purple': '#472b7d',
      'purple-tones': {
        '50': '#efeeff',
        '100': '#e2e0ff',
        '200': '#cbc6ff',
        '300': '#b0a4fd',
        '400': '#997ffa',
        '500': '#8b61f3',
        '600': '#7f44e7',
        '700': '#6f36cc',
        '800': '#5a2ea5',
        '900': '#2c1a4c',
      },
      'yellow': '#ece539',
      'yellow-tones': {
        '100': '#f6fac7',
        '200': '#f2f692',
        '300': '#f0f054',
        '500': '#daca18',
      },
      'gray': '#939597',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [],
};
export default config;
