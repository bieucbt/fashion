/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9/16'
      },
      animation: {
        showMenuMobile: 'showMenuMobile linear 1s forwards',
        hiddenMenuMobile: 'hiddenMenuMobile linear 1s forwards',
      },
      keyframes: {
        showMenuMobile: {
          '0%': { width: '0', opacity: '0%' },
          '100%': { width: '100vw', opacity: '100%' },
        },
        hiddenMenuMobile: {
          '0%': { width: '100vw', opacity: '100%' },
          '100%': { width: '0', opacity: '0%' },
        },
      },
      boxShadow: {
        submenu: 'rgba(138, 159, 168, 0.25) 0px 5px 25px 0px',
        menu: 'rgba(43, 52, 74, 0.12) 0px 10px 25px 0px'
      },
      colors: {
        grayText: "#696C70",
        blackText: '#1F1F1F',
        dateText: '#A0A0A0'
      }
    },
    screens: {
      maxXs: {max: '479px'},
      xs: '480px',
      maxSm: {max: '639px'},
      sm: '640px',
      maxMd: { max: '767px' },
      md: '768px',
      maxLg: { max: '1023px' },
      lg: '1024px',
      xl: '1280px',
    },
    
  },
  plugins: [],
}

