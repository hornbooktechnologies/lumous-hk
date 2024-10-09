import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          50: '#000',
          100: '#08182b',
          200: '#30303c',
          300: '#112025'
        },
        gray: {
          50: '#EFF0F4',
          100: '#adb7c5',
          200: '#666666',
          300: '#444444',
          400: '#e9e9e9'
        },
        customWhite: {
          1: '#ffffff',
        },
        green: {
          50: '#195F6B',
          100: '#F0FEFF',
          200: '#195F6B',
        },
        red: {
          50: '#ff7575',
        },
        yellow :{
          50: '#FDC161'
        },
        sky: {
          50: '#F9FAFB'
        }
      },
      boxShadow: {
        'custom-shadow': '4px 4px 32px 0px #00000014',
      }
    },
    screens: {
      'lg': '1280px',
    }
  },
  plugins: [],
};
export default config;
