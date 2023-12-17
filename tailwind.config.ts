import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#131418',
          105: '#26242b',
          110: '#2E3130',
          115: '#292e32',
          200: '#1E1E22',
          300: '#181920',
          400: '#12151A',
          405: 'rgb(18, 21, 26,.5)',
          500: '#20222C',
          600: 'rgba(0,0,0,.5)',
          700: 'rgba(0,0,0,.9)',
          800: 'rgba(19, 20, 24, .8)',
          900: 'rgba(19, 20, 24, .4)',
        },
        black: {
          fot: '#282828',
          main: '#000000',
        },
        Grey: {
          G0: '#fdfdfd',
          G10: '#fafafa',
          G20: '#f5f5f5',
          G30: '#ebebeb',
          G40: '#DEDEDE',
          G50: '#c0c0c0',
          G60: '#b1b1b1',
          G70: '#a4a4a4',
          G80: '#959595',
          G90: '#868686',
          G100: '#767676',
          G200: '#676767',
          G300: '#585858',
          G400: '#4b4b4b',
          G500: '#3c3c3c',
          G600: '#303030',
          G700: '#1e1e1e',
          G800: '#0f0f0f',
          G900: '#020202',
        },
        Errors: {
          E50: '#feeceb',
          E75: '#f9b2ad',
          E100: '#f6938c',
          E200: '#f3645a',
          E300: '#f04438',
          E400: '#a83027',
          E500: '#922922',
        },
        Warnings: {
          W50: '#fef4e6',
          W75: '#fcd19a',
          W100: '#fabf70',
          W200: '#f8a333',
          W300: '#f79009',
          W400: '#ad6506',
          W500: '#975805',
        },
        brand: {
          disabled: '#E1E3E2',
          disabled2: '#C4C7C6',
          red: {
            primary: '#FF2E2E',
            hover: '#FF5C5C',
            focused: '#FF2E2E',
            pressed: '#FF2E2E',
          },
        },
        Success: {
          S50: '#e7f8f0',
          S75: '#9ee1c2',
          S100: '#76d5a9',
          S200: '#3ac383',
          S300: '#12b76a',
          S400: '#0d804a',
          S500: '#0b7041',
        },
        red: {
          105: '#BE123C1A',
          200: '#ff0000',
          205: '#BE123C',
          300: '#cc0000',
          305: '#ff4741',
          306: '#BE123C',
          400: '#990000',
          500: '#660000',
          600: '#330000',
          700: '#000000',
        },
        green: {
          950: '#191c1e',
          900: '#000000',
          850: '#052011',
          800: '#003A1B',
          750: '#005427',
          700: '#006F37',
          600: '#009254',
          500: '#33A467',
          400: '#009254',
          300: '#00894C',
          200: '#64BD87',
          100: '#96D4AB',
          50: '#CAEAD4',
          30: '#E6F5EA',
          20: '#CAEAD499',
          10: '#F4FBF6',
          2: '#37d67a',
        },
        white: {
          N0: '#FEFEFE',
          100: '#fff',
          110: '#EEEEEE',
          115: '#EBEEEF',
          120: '#E1E3E2',
          130: '#E6F5EA',
          140: '#EBFDF3',
          200: '#f2f2f2',
          210: '#F5FBF6',
          220: '#FAFFFD',
          300: '#e6e6e6',
          400: '#A8ACAB',
          500: '#cccccc',
          600: '#bfbfbf',
          700: '#b3b3b3',
          650: '#737876',
        },
        slate: {
          50: '#D0D5DD',
          100: '#ccd6f6',
          200: '#8892b0',
          300: '#344054',
        },
        blue: {
          100: '#258dfd',
          105: '#4055e4',
          200: '#4898f0',
          250: '#EBF6F9',
          300: '#3F7EEE',
          301: '#59CBE8',
          302: '#102241',
          400: '#0655E2',
          500: '#513cef',
          600: '#5452d379',
          700: '#0142e2',
          800: '#08173f',
        },
        yellow: {
          100: '#fcec66',
          200: '#f9d936',
          300: '#f5c502',
          400: '#f1b200',
          500: '#eeda00',
          600: '#e8c400',
        },
        orange: {
          100: '#ffb400',
          110: '#F1AE67',
          200: '#ff9d00',
          300: '#ff8500',
          400: '#ff6e00',
          500: '#ff5a00',
          600: '#ff4500',
        },
        purple: {
          100: '#a38edb',
          200: '#8f7ecf',
          300: '#7a6fc3',
          400: '#6a60b7',
          500: '#59519c',
          600: '#4b437e',
        },
        pink: {
          100: '#ffa3c9',
          120: '#FFDCDC',
          200: '#ff8fb1',
          300: '#ff7799',
          400: '#ff5f81',
          500: '#fc4468',
          600: '#e82a4f',
        },
        gray: {
          100: '#a0a6c9',
          200: '#3f4550',
          300: '#8D9290',
          400: '#737876',
          500: '#667185',
          alt: '#E4E7EC',
          fot: '#535353',
        },
        primary: {
          100: '#E0580C',
        },
        secondary: {
          100: '#FCEEE7',
        },
      },
      fontFamily: {
        Worksans: ['Work Sans', 'sans-serif'],
      },
      content: {
        brush: "url('./public/brush.png')",
      },
    },
  },
  plugins: [],
};
export default config;
